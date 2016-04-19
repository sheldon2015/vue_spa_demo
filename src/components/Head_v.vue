<style>

#header {
    position: absolute;
    height: 4rem;
    background: gray;
    left: 0;
    right: 0;
    line-height: 2.4;
}

#switch {
    width: 2.2rem;
    height: 2.2rem;
    text-align: center;
    cursor: pointer;
    margin-left: 2rem;
}

#switch:before {
    content: "";
    width: 20px;
    height: 2px;
    background-color: #ccc;
    display: inline-block;
    box-shadow: 0 7px 0 #ccc, 0 -7px 0 #ccc;
}

</style>

<template>

<header id="header">
    <span v-on:click="toggleSide" id="switch"></span>
</header>

</template>

<script>

export default {
    data() {
            return {
                title: 'header'
            }
        },
        props: ['mytoggle'],
        methods: {
            toggleSide() {
                if (this.mytoggle) {
                    this.mytoggle = false;
                } else {
                    this.mytoggle = true;
                }
            }
        }
}

</script>
