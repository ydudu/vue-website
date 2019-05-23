<template>
    <div>
        <Col :xs="24" :md="{span:12}" v-for="(res, index) in resData">
            <Card>
                <p slot="title">
                    {{res.name}}
                </p>
                <p>{{res.datetime}}</p>
                <p>幸运色：{{res.color}}</p>
                <p>健康指数：{{res.health}}</p>
                <p>爱情指数：{{res.love}}</p>
                <p>财运指数：{{res.money}}</p>
                <p>幸运数字：{{res.number}}</p>
                <p>速配星座：{{res.QFriend}}</p>
                <p>今日概述：{{res.summary}}</p>
                <p>工作指数：{{res.work}}</p>
                <p>{{resData}}</p>
            </Card>
        </Col>
    </div>
</template>

<script>
    export default {
        name: "constellation",
        data(){
          return {
              resData: []
          }
        },
        props: {
            consName:{
                type: Array,
                default: []
            }
        },
        created(){
            this.getConstellation();
        },
        methods: {
            getConstellation: function () {
                this.$ajax.get('/apiNumber?umod=astro&act=astro&jsonp=1&func=TodatTpl&t=4&a=virgo&y=2015&m=5&d=12').then((res)=>{
                    this.resData = unescape(res.data.replace(/\\/g, "%"));
                    console.log(JSON.parser(this.resData));
                })
            }
        }
    }
</script>

<style scoped>

</style>