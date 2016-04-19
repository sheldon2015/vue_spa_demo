<style>

#bid-detail .bid-info .item {
    display: flex;
}

#bid-detail .item-inner:first-child {
    flex: 1;
}

#bid-detail .item-inner:last-child {
    flex: 2;
}

#bid-detail .tabs {
    display: flex;
}

#bid-detail .tab-indicator {
    flex: 1;
}

#bid-detail .bid-btn {
    background: gray;
    font-weight: 700;
    position: absolute;
    bottom: 0;
    width: 100%;
}

</style>

<template>

<div id="bid-detail">
    <ul class='list-unstyled bid-info'>
        <li class='item'>
            <div class="item-inner">
                标的类型:

            </div>
            <div class="item-inner">
                天使标

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                年化利率:

            </div>
            <div class="item-inner">
                14%

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                贷款期限:

            </div>
            <div class="item-inner">
                1个月

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                已投:

            </div>
            <div class="item-inner">
                14%

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                借款余额:

            </div>
            <div class="item-inner">
                2222222

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                借款金额:

            </div>
            <div class="item-inner">
                333333

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                投标限额:

            </div>
            <div class="item-inner">
                100% （单次不超过￥500000）

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                投标时间:

            </div>
            <div class="item-inner">
                2016/05/02 00:00:59

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                还款方式:

            </div>
            <div class="item-inner">
                按月付息，到期还本

            </div>
        </li>
        <li class='item'>
            <div class="item-inner">
                合同编号:

            </div>
            <div class="item-inner">
                JLCS0003

            </div>
        </li>



    </ul>
    <ul class='list-unstyled  tabs  text-center'>
        <li class='tab-indicator item'><a v-link="{    name: 'loanInfo'   }">贷款信息</a></li>
        <li class='tab-indicator item'><a v-link="{    name: 'bidRec'   }">投标记录</a></li>
        <li class='tab-indicator item'><a v-link="{    name: 'loanImgs'   }">资料图片</a></li>
    </ul>

    <div class="text-center  item  bid-btn">
        <a v-link="{    name: 'bidForm'   }">马上投标</a>
    </div>



</div>

</template>

<script>

export default {

    data() {
        return {

        }
    }
}

</script>
