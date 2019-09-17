<template>
    <div>
        <Spin fix>
            <Icon type="ios-loading" size=32 class="demo-spin-icon-load"></Icon>
            <div>加载中...</div>
        </Spin>
    </div>
</template>

<script>
    import {Spin, Icon} from 'iview'
    export default {
        name: "loading",
        components: {
            Spin, Icon
        }
    }
</script>

<style lang="scss">
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .ivu-spin{
        .ivu-spin-main{
            top: 10%;
        }
    }
</style>