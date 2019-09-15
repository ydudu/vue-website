<template>
    <div class="wrapper">
        <div class="wea">
            <span class="span-box">
                 <img :src='weaimgUrl' style="width: 28px; vertical-align:sub;">
                <span> {{city}}</span>
                <span>
                    {{dataArray.week}}
                </span>
                <span>
                    {{dataArray.wea}}
                </span>
                <span>
                    {{dataArray.tem2}}~{{dataArray.tem1}}
                </span>
            </span>
        </div>
        <div class="border-wrapper"></div>
        <Row :gutter="14">
            <Col :xs="24" :lg="{span:18}">
                <div class="block-wrapper">
                    <Col :xs="8">
                        <div class="block block1">
                            <div class="svg-box">
                                <icon-svg icon-class="tubiao215" icon-style="svgIcon"></icon-svg>
                                <i class="iconfont icon-tubiao215 svgIcon"></i>
                                <p>1310191557</p>
                            </div>
                        </div>
                    </Col>
                    <Col :xs="8">
                        <a href="https://weibo.com/p/1005052994196362/home" target="_blank">
                            <div class="block block2">
                                <div class="svg-box">
                                    <icon-svg icon-class="weibo" icon-style="svgIcon"></icon-svg>
                                    <p>weibo</p>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col :xs="8">
                        <div class="block block3">
                            <div class="svg-box">
                                <icon-svg icon-class="wechat" icon-style="svgIcon"></icon-svg>
                                <p>YG-Cavalry</p>
                            </div>
                        </div>
                    </Col>
                    <Col :xs="8">
                        <a href="https://github.com/ydudu" target="_blank">
                            <div class="block block4">
                                <div class="svg-box">
                                    <icon-svg icon-class="github" icon-style="svgIcon"></icon-svg>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col :xs="8">
                        <div class="block block5"></div>
                    </Col>
                    <Col :xs="8">
                        <a href="https://ydudu.github.io/" target="_blank">
                            <div class="block block6">
                                <div class="svg-box">
                                    <icon-svg icon-class="hexo" icon-style="svgIcon"></icon-svg>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col :xs="8">
                        <a href="https://www.cnblogs.com/Cavalary/" target="_blank">
                            <div class="block block7">
                                <div class="svg-box">
                                    <icon-svg icon-class="ego-blog" icon-style="svgIcon"></icon-svg>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col :xs="8">
                        <div class="block block8">
                            <div class="svg-box">
                                <icon-svg icon-class="youxiang" icon-style="svgIcon"></icon-svg>
                                <p>shine.yg@qq.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col :xs="8">
                        <div class="block block9">
                            <div class="svg-box">
                                <icon-svg icon-class="zhihu" icon-style="svgIcon"></icon-svg>
                            </div>
                        </div>
                    </Col>
                </div>
                <div class="block-wrapper">
                    <Col :xs="24" :md="8">
                        <div class="reader reader-img-bg1">
                        </div>
                    </Col>
                    <Col :xs="24" :md="16">
                        <div class="reader reader-me">
                            <h2>FOR DREAM</h2>
                            <p>远处的青山氤氲在缭绕的烟波里，让人不禁想起那如诗、如画、如歌、宛如仙境般的世外桃源。烟雾弥漫的江上早已不见漂泊的渔船，而我的思绪还仍沉浸在那“青箬笠，绿蓑衣，斜风细雨不须归”的情境里，不愿走出。
                            </p>
                        </div>
                    </Col>
                </div>
                <div class="block-wrapper">
                    <Col :xs="24" :md="8">
                        <div class="reader reader-img-bg2">
                        </div>
                    </Col>
                    <Col :xs="24" :md="16">
                        <div class="reader reader-me">
                            <h2>ABOUT</h2>
                            <p>
                                很庆幸无数次的跌倒没有放弃过，它教会了我一个道理，不断的积累，才能铸就那个最好的自己，不积跬步无以至千里，您可以通过在线简历了解我的其他作品
                                <a style="color: yellow" href="https://ydudu.github.io/my-website" target="_blank">在线简历</a>
                            </p>
                        </div>
                    </Col>
                </div>
            </Col>
            <Col :xs="24" :lg="{span:6}">
                <Card dis-hover class="card1">
                    <p slot="title">我的名片</p>
                    <div class="introduce-bg-wrapper">
                        <img :src="imgUrl.smallImg2" class="introduce-bg">
                    </div>
                    <p>姓名：杨光</p>
                    <p>职业：Web前端工程师、前端设计</p>
                    <p>现居：江苏省-苏州市</p>
                    <p>座右铭：快乐的奔跑</p>
                    <p>Email：shine.yg@qq.com</p>
                </Card>
                <Card dis-hover class="card2">
                    <div class="introduce-bg-wrapper">
                        <img :src="imgUrl.smallImg1" class="introduce-bg">
                    </div>
                    <p slot="title">我的标签</p>
                    <div class="tag-wrapper">
                        <Tag color="default">打篮球</Tag>
                        <Tag color="primary">拍摄</Tag>
                        <Tag color="orange">爱狗</Tag>
                        <Tag color="success">旅行</Tag>
                        <Tag color="error">安静</Tag>
                        <Tag color="warning">乐观</Tag>
                        <Tag color="magenta">小清新</Tag>
                        <Tag color="red">幽默</Tag>
                        <Tag color="volcano">mvp代言人</Tag>
                        <Tag color="orange">创新</Tag>
                        <Tag color="gold">自律</Tag>
                        <Tag color="yellow">独立</Tag>
                        <Tag color="success">完美主义</Tag>
                        <Tag color="lime">奋斗ing</Tag>
                        <Tag color="green">成长ing</Tag>
                        <Tag color="cyan">起床困难户</Tag>
                        <Tag color="blue">学习ing</Tag>
                        <Tag color="geekblue">听音乐</Tag>
                        <Tag color="purple">K歌</Tag>
                        <Tag color="#FFA2D3">逛博客</Tag>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row class="end-about"> 
            <div class="about-bar">
                <h3 class="about-title">ABOUT</h3>
                <h2>
                    以梦为马，不负韶华<br>
                    <span>...</span>
                </h2>  
                <p>烟雨旅途，匆匆的脚步走不出那一份执念，不眠夜的箴言素笔，诉不完满腹的唐风宋雨，已经发黄的书笺写满了对你的惦记。<br>  孤独夜，就这样去想你，仰望天空挥泪无语，那最亮的两颗星，却隔着触摸不到的距离，流星划过的那一刻可曾唤醒你的记忆，流云飘来的那一朵可否捎来你的话语，我多想与你邀月共盏，把柔情融在酒里，我多想醉卧在你的身躯，一梦不起。</p>  
            </div>
            <div class="creat">
                <div class="creat-left">青春</div>
                <div class="creat-right">奋斗</div>
            </div>
        </Row>
        <footerTable></footerTable>
    </div>
</template>

<script>
    import footerTable from '@/components/footer/footer'
    import titleimg from '@/components/titleimg/titleimg'
    import articleDay from '@/components/articleday/articleday'
    import iconSvg from '@/components/icon/icon'
    import {wea} from '../api/api'
    export default {
        name: "mainPage",
        components: { footerTable, titleimg, articleDay, iconSvg},
        data() {
            return {
                imgUrl: {
                    smallImg1: "https://dwz.cn/CkCrwfbL",
                    smallImg2: require('../assets/img/autor1.png')
                },
                city: '',
                dataArray: '',
                weaimgUrl: '',
               
            }
        },
        created(){
            wea().then(res=>{
                this.city = res.data.city
                this.dataArray = res.data.data[0]
                this.weaimgUrl = `https://xuesax.com/tianqiapi/skin/cake/${this.dataArray.wea_img}.png`
            })
        }
    }
</script>

<style lang="scss">
    @import '../assets/mainPage/mainPage.scss'
</style>