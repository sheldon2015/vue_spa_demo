<style>

#main {
    position: absolute;
    top: 4rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
}

</style>

<template>

<div id="main">
    <!-- 路由外链 -->
    <router-view></router-view>
</div>

</template>

<script>

export default {
    data() {
        return {
            msg: 'main!'
        }
    }
}

</script>
