<template>
    <div class="article-wrapper">
        <titleimg :imgTitleurl="imgTitleurl"></titleimg>
        <Row>
            <article-day></article-day>
        </Row>
        <footerTable></footerTable>
    </div>
</template>

<script>
    import titleimg from '@/components/titleimg/titleimg'
    import articleDay from '@/components/articleday/articleday'
    import footerTable from '@/components/footer/footer'
    export default {
        name: "oneArticle",
        components: {titleimg, articleDay, footerTable},
        data () {
            return {
                imgTitleurl: "http://p19.qhimg.com/t017e9207ba6c5f63e9.jpg"
            }
        }
    }
</script>

<style lang="scss">
    .article-wrapper{
        background-color: #00d6cb;
        background-image: url("https://www.transparenttextures.com/patterns/buried.png");
        .ivu-row{
            padding-left: 50px;
            padding-right: 50px;
            padding-top: 40px;
            min-height: 70vh;
            @media screen  and(max-width: 768px){
                padding-left: 9px;
                padding-right: 9px;
            }
        }
    }
</style>