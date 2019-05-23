<template>
    <div  :style="{background: 'url('+imgTitleurl+') center/cover',minHeight: '25vh',marginTop: '-50px' }"></div>
</template>

<script>
    export default {
        name: "titleimg",
        props: {
            imgTitleurl: {
                type: String,
                default: "https://dwz.cn/jUccMUv1"
            }
        },
    }
</script>

<style scoped>

</style>