<template>
    <div class="wrapper">
        <div class="container">
            <p class="container-p">主页 | 关于</p>
            <div class="border-wrapper"></div>
        </div>
        <Row :gutter="14">
            <Col :xs="24" :lg="{span:18}">
                <div class="block-wrapper">
                    <Col :xs="8">
                        <div class="block block1">
                            <div class="svg-box">
                                <icon-svg icon-class="tubiao215" icon-style="svgIcon"></icon-svg>
                                <p>1310191557</p>
                            </div>
                        </div>
                    </Col>
                    <Col :xs="8">
                        <a href="https://weibo.com/p/1005052994196362/home" target="_blank">
                            <div class="block block2">
                                <div class="svg-box">
                                    <icon-svg icon-class="weibo" icon-style="svgIcon"></icon-svg>
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
                            <p>用代码编织生活，是件美好的事情，当你把热情投入到那份你喜爱的事情上，慢慢的生活因为你而偷偷的改变，不知不觉你就是那个缔造者。我热爱生活，热爱白天与黑夜，热爱用代码栓释不一样的青春。
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
                                很庆幸无数次的跌倒没有放弃过，它教会了我一个道理，不断的积累，才能铸就那个最好的自己，不积跬步无以至千里。
                                <a style="color: yellow" href="https://ydudu.github.io/my-website" target="_blank">在线简历</a>
                            </p>
                        </div>
                    </Col>
                </div>
            </Col>
            <Col :xs="24" :lg="{span:6}">
                <Card dis-hover>
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
                <Card dis-hover>
                <div class="introduce-bg-wrapper">
                    <img :src="imgUrl.smallImg1" class="introduce-bg">
                </div>
                <p class="introduce">如果你有梦想，就要去捍卫它！每个闪闪发光的人，都曾熬过一个又一个不为人知的黑夜!</p>
            </Card>
                <Card dis-hover>
                    <p slot="title">我的标签</p>
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
                </Card>
            </Col>
        </Row>
        <footerTable></footerTable>
    </div>
</template>

<script>
    import footerTable from '@/components/footer/footer'
    import titleimg from '@/components/titleimg/titleimg'
    import articleDay from '@/components/articleday/articleday'
    import iconSvg from '@/components/icon/icon'
    export default {
        name: "mainPage",
        components: { footerTable, titleimg, articleDay, iconSvg},
        data() {
            return {
                imgUrl: {
                    smallImg1: "https://static.quotery.com/backgrounds/480/library-480.jpg",
                    smallImg2: require('../assets/img/autor.png')
                }
            }
        },
    }
</script>

<style lang="scss">
    .wrapper{
        margin-top: -50px;
        .container{
            position: relative;
            height: 50px;
            margin: 0 70px 20px 70px;
            padding-left: 2px;
            padding-right: 2px;
            overflow: hidden;
            @media screen and(max-width: 768px){
                margin: 0 8px 8px 8px;
            }
            .container-p{
                position: absolute;
                bottom: 5px;
                font-size: 22px;
            }
            .border-wrapper{
                width: 100%;
                bottom: 0;
                position: absolute;
                height: 1px;
                background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
            }
        }
        .ivu-row{
            min-height: 50vh;
            margin-left: 0!important;
            margin-right: 0!important;
            padding-left: 40px;
            padding-right: 40px;
            @media screen and(max-width: 576px){
                padding-left: 15px;
                padding-right: 15px;
            }
            .ivu-col-span-lg-18{
                .block-wrapper{
                    background: rgba(0,0,0,.2);
                    margin-bottom: 1.875em;
                    overflow: hidden;
                    .block{
                        height: 200px;
                        position: relative;
                        vertical-align: middle;
                        transition: all .35s;
                        cursor: pointer;
                        @media screen and(max-width: 576px){
                            height: 120px;
                        }
                        .svg-box{
                            position: absolute;
                            top: 50%;
                            width: 100%;
                            transform: translateY(-25px);
                            .svgIcon{
                                color: #fff;
                                width: 50px;
                                height: 50px;
                                fill: currentColor;
                                @media screen and(max-width: 576px){
                                    width: 35px;
                                    height: 35px;
                                }
                            }
                            p{
                                color: #fff;
                                font-size: 15px;
                                text-align: center;
                                word-wrap:break-word;
                                word-break:break-all;
                                @media screen and(max-width: 576px){
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                    .block1{
                        border-right: 1px solid #ccc;
                        border-bottom: 1px solid #ccc;
                        &:hover{
                            background: #56d673;
                        }
                    }
                    .block2{
                        border-bottom: 1px solid #ccc;
                        &:hover{
                            background: #4a6e9f;
                        }
                    }
                    .block3{
                        border-left: 1px solid #ccc;
                        border-bottom: 1px solid #ccc;
                        &:hover{
                            background: #d6d113;
                        }
                    }
                    .block4{
                        border-right: 1px solid #ccc;
                        &:hover{
                            background: #d64183;
                        }
                    }
                    .block5{
                        background: url('../assets/img/pazhe.png') center/cover;
                    }
                    .block6{
                        border-left: 1px solid #ccc;
                        &:hover{
                            background: #807ebe;
                        }
                    }
                    .block7{
                        border-right: 1px solid #ccc;
                        border-top: 1px solid #ccc;
                        &:hover{
                            background: #d62214;
                        }
                    }
                    .block8{
                        border-top: 1px solid #ccc;
                        &:hover{
                            background: #11d67a;
                        }
                    }
                    .block9{
                        border-top: 1px solid #ccc;
                        border-left: 1px solid #ccc;
                        &:hover{
                            background: #1b89d6;
                        }
                    }
                    .reader{
                        height: 240px;
                        &-img-bg1{
                            background: url(https://up.enterdesk.com/edpic_source/9d/af/53/9daf53b2b9fef91432559245fa569a6a.jpg) center/cover;
                        }
                        &-img-bg2{
                            background: url(https://dwz.cn/N8ED9YRB) center/cover;
                        }
                        &-me{
                            color: #fff;
                            padding: 22px;
                            background-color: rgba(0, 0, 0, 0.2);
                            p{
                                font-size: 14px;
                                text-align: left;
                                line-height: 26px;
                                @media screen and(max-width: 576px){
                                    line-height: 22px;
                                }
                            }
                            h2{
                                font-size: 26px;
                                text-align: left;
                                line-height: 36px;
                                font-weight: 600;
                                color: #ffff00;
                                position: relative;
                                &:after{
                                    content: "";
                                    width: 80px;
                                    height: 4px;
                                    background: yellow;
                                    position: absolute;
                                    left: 0;
                                    bottom: 0;
                                }
                            }
                        }
                    }
                }
            }
            .ivu-col-span-lg-6{
                .ivu-card{
                    margin-bottom: 1.875em;
                    background: rgba(0,0,0,.2);
                    border: transparent;
                    &-head{
                        border-bottom: none;
                        p{
                            font-size: 20px;
                            position: relative;
                            color: #fff;
                            text-align: left;
                        }
                    }
                    &-body{
                        p{
                            line-height: 28px;
                            text-align: left;
                            font-size:14px;
                            color: #fff;
                        }
                    }
                    .introduce-bg-wrapper{
                        overflow: hidden;
                        .introduce-bg{
                            cursor: pointer;
                            width: 100%;
                            height: 100%;
                            transition: all .4s;
                        }
                        .introduce-bg:hover{
                            transform: scale(1.05);
                        }
                    }
                    .introduce{
                        font-size:14px;
                        padding-top: 0.75em;
                    }
                }
            }
        }
    }
    .wrapper:before {
        content: ' ';
        position: fixed;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url('../assets/img/banner_thumb_1.jpg') center 0 no-repeat;
        background-size: cover;
    }
</style>