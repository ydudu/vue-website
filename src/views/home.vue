<template>
    <div class="home">
        <menu-nav></menu-nav>
        <router-view/>
    </div>
</template>
<script>
    import MenuNav from '@/components/menu-nav/menu-nav'
    export default {
        name: "home",
        components: {
            MenuNav,
        }
    }
</script>
<style lang="scss">
</style>