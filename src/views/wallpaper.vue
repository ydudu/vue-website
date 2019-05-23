<template>
    <div class="wallpaper">
        <titleimg></titleimg>
        <ul class="name-wrapper-ul">
            <li v-for="(id,index) in idI" :key="index" @click="getId(id.id)">
                <Icon type="md-images" size="20" />
                {{id.name}}
            </li>
        </ul>
        <ul class="img-wrapper-ul">
            <viewer style="height: 100%;" :images="images">
                <li v-for="(item,index) in items.data" :key="index">
                    <img v-lazy="item.url" :key="item.url">
                </li>
            </viewer>
            <loading v-if="dataIf"></loading>
        </ul>
        <div class="no-img">没有更多内容</div>
        <footerTable></footerTable>
    </div>
</template>

<script>
    import titleimg from '@/components/titleimg/titleimg'
    import loading from '@/components/loading/loading'
    import footerTable from '@/components/footer/footer'
    export default {
        name: "wallpaper",
        components:{ titleimg, loading, footerTable},
        data() {
            return {
                items: [],
                idI: [],
                valId:[],
                cidParams: {
                    params: 36
                },
                dataIf: true,
                images: []
            }
        },
        methods:{
            getId(cid){
                this.$router.push({ //   直接调用$router.push 实现携带参数的跳转
                    name: 'wallpaper',
                    query: {
                        id: cid
                    }
                });
                this.axiosData()
            },
             axiosData(){
                const that = this;
                that.dataIf = true; //数据加载前loding为显示
                this.$ajax.all([
                    this.$ajax.get(`/api/index.php?c=WallPaperAndroid&a=getAppsByCategory&cid=${that.$route.query.id || 9}&start=0&count=26`),
                    this.$ajax.get('/api/index.php?c=WallPaperAndroid&a=getAllCategories')
                ]).then(this.$ajax.spread(function(resGetUrl, resId){
                    that.items = resGetUrl.data;  //图片url路径
                    that.idI = resId.data.data; //图片id路径
                    that.images = resGetUrl.data.data;
                    that.dataIf = false;  //loading数据加载完为隐藏
                    console.log(that.cidParams.params)
                })).catch((err)=>{
                    console.log(err)
                })
            }
        },
        created(){
          this.axiosData()
        }
    }
</script>
<style lang="scss">
    .wallpaper{
        .name-wrapper-ul{
            overflow: hidden;
            padding: 0 20px;
            width: 100%;
            border-bottom: 1px solid #ccc;
            @media screen and(max-width: 768px){
                padding: 0 8px;
            }
            li{
                float: left;
                cursor: pointer;
                font-size: 14px;
                line-height: 28px;
                color: #FFFFFF;
                margin: 6px;
                background: #5a9ead;
                padding: 0 4px;
            }
        }
        .img-wrapper-ul{
            overflow: hidden;
            padding: 0 20px;
            min-height: 70vh;
            width: 100%;
            position: relative;
            @media screen and(max-width: 768px){
                padding: 0 8px;
            }
            li{
                width: 33.33%;
                height: 250px;
                float: left;
                padding: 15px;
                @media screen and(max-width: 768px){
                    width: 50%;
                    height: 160px;
                    padding: 5px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
            }
        }
        .no-img{
            height: 22px;
            line-height: 22px;
            font-size: 14px;
        }
    }
</style>