<template>
    <div :name="MenuData.name">sss</div>
</template>

<script>
    export default {
        name: "SuMenu",
        props: {
            MenuData:{
                type: Object,
                default: () => ({})
            }
        }
    }
</script>

<style scoped>

</style>