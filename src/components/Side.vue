<style>

#side {
    position: absolute;
    top: -1px;
    bottom: -1px;
    background: #333;
    width: 10rem;
    color: white;
    z-index: 999;
    transform: translate3d(-10rem, 0, 0);
}

#side .links {
    padding: 1rem 0 1rem 2rem;
}

#side .links a {
    color: white;
}

#side .links .v-link-active {
    font-weight: bold;
    color: #ff7147;
    text-decoration: none;
}

</style>

<template>

<div id="side">
    <div class='links' v-for="item in links">
        <a v-on:click='toggleShow' v-link="item.url">{{ item.name }}</a>
    </div>
</div>

</template>

<script>

// 根据Vue.js 1.0 binding syntax， v-link 不再支持包含 mustache 标签。可以用常规的JavaScript表达式代替 mustache 标签， 例如 v-link="'user/' + user.name" 。

//跳转的地址
let links = [{
    name: '首页',
    url: '/index'
}, {
    name: '我的帐户',
    url: '/account'
}, {
    name: '投资列表',
    url: '/investList'
}, {
    name: '登录',
    url: '/login'
}, {
    name: '注册',
    url: '/regist'
}];
export default {

    data() {
            return {
                links
            }
        },
        props: ['myswitch'],

        methods: {
            toggleShow() {
                if (this.myswitch) {
                    this.myswitch = false;

                } else {
                    this.myswitch = true;
                }

            }

        }
}

</script>
