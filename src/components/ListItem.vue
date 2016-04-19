<style>



.item .bid-info-wrap {
    display: flex;
}

.bid-info-wrap .info-item {
    flex: 1;
}

</style>

<template>

<li class='item'>
    <a v-link="{ name: 'bidDetail' , params:{  bidId: listItem.id } }">
        <div>
            {{listItem.bidName}}
        </div>
        <div class='bid-info-wrap'>
            <div class='info-item'>
                <div class=''>年化利率</div>
                <div class=''>{{listItem.rate}}</div>
            </div>
            <div class='info-item'>
                <div class=''>期限</div>
                <div class=''>{{listItem.limit}}</div>
            </div>
            <div class='info-item'>
                <div class=''>总额</div>
                <div class=''>{{listItem.total}}</div>
            </div>
            <div class='info-item'>

                <template v-if='ok'>
                    <div class="">
                        倒计时
                    </div>
                    <div class=''>{{ listItem.progress | countback }}</div>

                </template>

                <template v-else>
                    <div class=''>进度</div>
                    <div class=''>{{ listItem.progress | countback}}</div>
                </template>

            </div>
        </div>
    </a>
</li>

</template>

<script>

export default {
    props: ['listItem'],
    data() {

        return {

            /**
             *计算属性和data里面的貌似还是有点前后区别
             */

            // ok: /^[1-9]\d*$/.test(this.listItem.progress)

        }
    },
    computed: {
        ok: function() {

            if (/^[1-9]\d*$/.test(this.listItem.progress)) {

                return true;

            }
            return false;

        }



    }
}

</script>
