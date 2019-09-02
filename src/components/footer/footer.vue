<template>
    <footer class="footer-wrapper">
        <p class="footer-p1">站点声明 | 学习共享</p>
        <p class="footer-p2">
            1、本网站所有内容，均为shine本人制作，部分数据采用非正式方式获取，仅供学习，若有侵权请告知，即刻删除，个人可以使用（请通知作者），但是未经许可不得用于任何商业目的.
        </p>
        <p class="footer-p2">2、所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：shine.yg@qq.com</p>
    </footer>
</template>

<script>
    export default {
        name: "footerTable"
    }
</script>

<style lang="scss">
    @import "../../assets/ScssRem/ScssRem.scss";
        .footer-wrapper{
            width: 100%;
            background: #3B3B3B;
            min-height: 50px;
            padding: 12px 0;
            .footer-p1{
                font-size: 16px;
                font-weight: 600;
                color: #516DF3;
                margin-bottom: 5px;
            }
            .footer-p2{
                font-size: 14px;
                text-align: left;
                color: #737272;
            }
        }
</style>