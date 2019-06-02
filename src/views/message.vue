<template>
    <div class="message-wrapper">
        <div class="message">
            <div id="SOHUCS" sid="请将此处替换为配置SourceID的语句"></div>
        </div>
        <footer-table></footer-table>
    </div>
</template>

<script>
    import footerTable from '@/components/footer/footer'
    export default {
        name: "message",
        components: {footerTable},
        mounted(){
            window.changyan = undefined;
            window.cyan = undefined;
            this.$loadScript("https://changyan.sohu.com/upload/changyan.js", () => {
                window.changyan.api.config({
                    appid: "cytESF4Rh", // 此处换成你的畅言应用的appid,
                    conf: "prod_e54b48156bda22b1742bdfeb2c382f64" , // 此处换成你畅言应用的conf。
                });
            });
        }
    }
</script>

<style lang="scss">
    .message-wrapper{
        margin-top: -50px;
        background: #8ce6b0;
        .message{
            min-height: 90vh;
        }
    }
</style>