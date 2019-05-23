<template>
    <div>
        <Col :xs="24" :lg="{span:24}">
            <Card class="card" dis-hover>
                <div slot="title">
                    <Button @click="defaultArticle" type="success">今日文章</Button>
                    <Button @click="prevArticle" type="warning">昨日文章</Button>
                    <Button @click="randomArticle('random')" type="info">随机文章</Button>
                    <h1 class="article-title">{{resData.title}}</h1>
                    <p class="article-author">{{resData.author}}</p>
                </div>
                <div v-html="resData.content" class="card-body-div"></div>
            </Card>
        </Col>
    </div>
</template>

<script>
    export default {
        name: "articleday",
        data () {
            return {
                resData: [],
                today: "today",
                prev: [],
                value1: false
            }
        },
        mounted(){
            this.randomArticle(this.$route.query.id);
        },
        methods: {
            randomArticle(randomId){
                    const that = this;
                    this.$router.push({
                        query:{
                            id: randomId
                        }
                    });
                    this.getArticleDay()
            },
            defaultArticle(){
                this.randomArticle('today');
            },
            prevArticle(){
                this.randomArticle('day');
            },
            getArticleDay: function () {
                let date = new Date();
                function lowDate(s){
                    if(s<10) return '0'+s;
                    else return s
                }
                let newDatePrev = date.getFullYear()+''+(lowDate(date.getMonth()+1))+''+(lowDate(date.getDate()-1));
                this.$ajax.get(`https://interface.meiriyiwen.com/article/${this.$route.query.id||this.today}?dev=1&date=${newDatePrev}`).then((res)=>{
                    this.resData = res.data.data;
                    this.prev = this.resData.date.prev;
                }).catch((err)=>{
                    console.log(err)
                });
                // this.$ajax.get(`https://interface.meiriyiwen.com/article/day?dev=1&date=20170216`).then((res)=>{
                //     this.resData = res.data.data;
                // }).catch((err)=>{
                //     console.log(err)
                // });
            }
        }
    }
</script>

<style lang="scss">
    .ivu-card{
        .ivu-card-head{
            .article-title{
                font-size: 2em;
                margin-top: 20px;
                margin-bottom: 30px;
            }
            .article-author{
                color: #999999;
            }
        }
        .ivu-card-body{
            text-align: left;
            .card-body-div{
                p{
                    margin-bottom: 30px;
                    line-height: 30px;
                    font-size: 16px;
                    color: #000;
                }
            }
        }
    }
</style>