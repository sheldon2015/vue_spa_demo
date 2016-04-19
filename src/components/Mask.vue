<style>

#mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: .4;
    z-index: 1;
    display: none;
}

#mask.mask-show {
    display: block;
}

</style>

<template>

<div v-on:click="toggleShow" id='mask' v-bind:class="[mask? isShow:'']">
</div>

</template>

<script>

export default {
    data() {
            return {
                isShow: 'mask-show'
            }
        },
        props: ['mask'],
        methods: {
            toggleShow() {
                if (this.mask) {
                    this.mask = false;

                } else {
                    this.mask = true;

                }

            }


        }
}

</script>
