<style>



</style>

<template>

<div id="invest-list">
    <ul class='list-unstyled'>
        <list-item v-for="item in list" v-bind:list-item='item'></list-item>
    </ul>
</div>

</template>

<script>

import ListItem from '../components/ListItem.vue'

export default {
    components: {
        ListItem
    },
    data() {
        return {
            list: '',

        }
    },
    ready: function() {
        console.log('ready');
        let me = this;
        me.timerIds = [];
        me.$http({
                url: 'src/store/investlist.json',
                method: 'GET'
            })
            .then(function(success) {
                me.list = success.data;
                me.list.forEach(function(element) {

                    if (/^\d*$/.test(element.progress)) {

                        let timerId = setInterval(function() {
                            element.progress = parseInt(element.progress) - 1;

                            // console.log(element.progress);

                            /**
                             *不需要手动调用nextTick 方法，数据与视图之间是响应的
                             */

                            // me.$nextTick(function() {
                            //     console.log(element.progress);
                            // });

                            if (element.progress == 0) {

                                clearInterval(timerId);

                            }

                        }, 1000);
                        me.timerIds.push(timerId);

                    }
                });
            }, function(error) {
                console.log(error);
            });
    },
    attached: function() {
        console.log('attached');
    },

    beforeDestroy: function() {

        // this.timerIds.forEach(function(timerId) {
        //     clearInterval(timerId);
        //
        //
        // })


        for (let timerId of this.timerIds) {
            clearInterval(timerId);

        }


        console.log('beforeDestroy');
    },
    destroyed: function() {
        console.log('destroyed');
    },
    route: {
        activate: function(transition) {
          transition.next()
            console.log('hook-example activated!')

        },
        deactivate: function(transition) {
          transition.next()
            console.log('hook-example deactivated!')

        },
        canActivate: function(transition) {
          transition.next()
            console.log('hook-example canActivate!')

        },
        canDeactivate: function(transition) {
          transition.next()
            console.log('hook-example canDeactivate!')

        },
        canReuse: function(transition) {
          transition.next()
            console.log('hook-example canReuse!')
        },
        data: function(transition) {
          transition.next()
            console.log('hook-example data!')

        }
    }
}

</script>
