<template>
    <div class="home">
        <menu-nav></menu-nav>
        <transition enter-active-class="animated fadeIn">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>
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