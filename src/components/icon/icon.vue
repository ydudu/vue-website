<template>
    <svg :class="iconStyle" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    export default {
        name: 'icon',
        props: {
            iconClass: {
                type: String,
                required: true
            },
            iconStyle: {
                type: String,
                default: "style"
            }
        },
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`
            }
        }
    }
</script>
<style>
    .style{
        width:2em;
        height: 2em;
    }
</style>