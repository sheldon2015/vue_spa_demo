<style>



</style>

<template>

<div v-if='$loadingRouteData'>


    Loading ...</div>

<div id="invest-list" v-if='!$loadingRouteData'>
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
        console.log('investlist data1');
        return {
            list: ''
        }
    },
    ready: function() {
        console.log('investlist ready');
        // let me = this;
        // me.timerIds = [];
        // me.$http({
        //         url: 'src/store/investlist.json',
        //         method: 'GET'
        //     })
        //     .then(function(success) {
        //         me.list = success.data;
        //         me.list.forEach(function(element) {

        //             if (/^\d*$/.test(element.progress)) {

        //                 let timerId = setInterval(function() {
        //                     element.progress = parseInt(element.progress) - 1;

        //                     // console.log(element.progress);

        //                     /**
        //                      *不需要手动调用nextTick 方法，数据与视图之间是响应的
        //                      */

        //                     // me.$nextTick(function() {
        //                     //     console.log(element.progress);
        //                     // });

        //                     if (element.progress == 0) {

        //                         clearInterval(timerId);

        //                     }

        //                 }, 1000);
        //                 me.timerIds.push(timerId);

        //             }
        //         });
        //     }, function(error) {
        //         console.log(error);
        //     });
        //




    },
    attached: function() {
        console.log('investlist attached');
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
        console.log('investlist beforeDestroy');
    },
    destroyed: function() {
        console.log('investlist destroyed');
    },
    route: {
        activate: function(transition) {
            console.log('investlist activated!');
            transition.next();

        },
        deactivate: function(transition) {
            console.log('investlist deactivated!');
            transition.next();
        },
        canActivate: function(transition) {
            console.log('investlist canActivate!');
            transition.next();
        },
        canDeactivate: function(transition) {
            console.log('investlist canDeactivate!');
            transition.next();
        },
        data: function(transition) {
            console.log('investlist data2!');


            /**
             * 返回一个promise
             */
            let me = this;
            me.timerIds = [];

            return this.$http({
                url: 'src/store/investlist.json',
                method: 'GET'
            }).then(function(success) {

                setTimeout(function() {

                    me.list.forEach(function(element) {
                        if (/^\d*$/.test(element.progress)) {
                            let timerId = setInterval(function() {
                                element.progress = parseInt(element.progress) - 1;
                                if (element.progress == 0) {
                                    clearInterval(timerId);
                                }
                            }, 1000);
                            me.timerIds.push(timerId);

                        }
                    });
                })

                return {
                    list: success.data
                };
            }, function(error) {
                console.log(error);
            });
        },
        canReuse: function(transition) {
            console.log('investlist canReuse!')
            transition.next()
        },


    }
}

</script>
