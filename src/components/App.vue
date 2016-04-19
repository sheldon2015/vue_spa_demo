<style>

#app {
    height: 100%;
}

.side-show {
    transform: translate3d(10rem, 0, 0);
}

.side-show #main {
    overflow: hidden;
}

.toggle-transition {
    transition: all .3s ease;
}

</style>

<template>

<div id="app" v-bind:class="[toggle? isShow:'']" transition='toggle'>
    <head_v v-bind:mytoggle.sync='toggle'></head_v>
    <main></main>
    <side v-bind:myswitch.sync='toggle'></side>
    <!-- <foot_v></foot_v> -->
    <mask v-bind:mask.sync='toggle'></mask>
</div>

</template>

<script>

import Side from './Side.vue'
import Main from './Main.vue'
import Head_v from './Head_v.vue'
// import Foot_v from './Foot_v.vue'·
import Mask from './Mask.vue'

export default {
    components: {
        Head_v,
        Main,
        Side,
        // Foot_v,
        Mask
    },
    data() {
        return {
            "msg": 'Hello Webapp!',
            "toggle": false,
            'isShow': 'side-show'
        }
    }
}

</script>
