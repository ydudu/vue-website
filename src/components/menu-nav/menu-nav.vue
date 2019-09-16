<template>
    <div class="layout">
        <Row>
            <Col :md="24" :xs="0">
                <Menu mode="horizontal" active-name="1" theme="dark">
                    <MenuItem name="1" to="/">
                        <Icon type="ios-home-outline" />
                        {{home.title}}
                    </MenuItem>
                    <MenuItem name="2" to="/oneArticle">
                        <Icon type="ios-book" />
                        {{resume.title}}
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-pricetags" />
                            {{other.title}}
                        </template>
                        <MenuGroup>
                            <MenuItem name="4" to="/about">
                              
                                {{contact.title}}
                            </MenuItem>
                            <MenuItem name="3-2">
                                <a href="https://github.com/ydudu" target="_blank">{{ other.github.title }}</a>
                            </MenuItem>
                            <MenuItem name="3-4">
                                <a href="https://www.cnblogs.com/Cavalary/" target="_blank">{{other.blog.title}}</a>
                            </MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="5" to="/wallpaper">
                        <Icon type="ios-image-outline" />
                        {{notes.title}}
                    </MenuItem>
                    <MenuItem name="6" @click.native="value1 = true" >
                        <Icon type="ios-musical-notes" />
                        <span>{{music.title}}</span>
                    </MenuItem>
                    <Drawer title="Music" :scrollable="false" v-model="value1" width="100">
                        <Music v-if="value1">
                        </Music>
                    </Drawer>
                    <MenuItem name="3-1">
                        <a class="resume-a" href="https://ydudu.github.io/my-website" target="_blank">
                            <Icon type="ios-construct" /> 项目
                        </a>
                    </MenuItem>
                    <MenuItem name="7" to="/message">
                        <Icon type="ios-create-outline" />
                        {{message.title}}
                    </MenuItem>
                    <MenuItem name="8" style="position: relative;" class="item-login" v-if="logShow">
                        <ButtonGroup shape="circle">
                            <Button type="success" ghost @click.native="loginChange">登录</Button>
                            <Button type="info" ghost @click.native="regin">注册</Button>
                         </ButtonGroup>
                    </MenuItem>
                    <MenuItem name="9" class="item-login" v-if="!logShow">
                        <Dropdown>
                            <a href="javascript:void(0)" >
                                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                个人中心
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>
                                     <router-link to="/perCenter">个人资料</router-link>
                                </DropdownItem>
                                <DropdownItem @click.native="singOut">退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>   
                </Menu>
            </Col>

            <login :show="show" @isShow="acceptIsShow" @logShow="changeLog"></login>
            <!--//屏幕小于992px-->
            <Col :xs="24" :md="0">
                <Layout>
                    <Layout>
                        <Header :style="{padding: 0}" class="layout-header-bar">
                            <div class="icon-box" @click="handleRotate">
                                <span class="spanIcon top" :class="['menuIcon',!isCollapsed ? 'RotateIcon':'']"></span>
                                <span class="spanIcon center" :class="['menuIcon',!isCollapsed ? 'RotateIconWidth':'']"></span>
                                <span class="spanIcon bottom" :class="['menuIcon',!isCollapsed ? 'theRotateIcon':'']"></span>
                            </div>
                        </Header>
                    </Layout>
                    <div class="menu-wrapper">
                        <Menu @on-select="handleRotate" active-name="5-2" theme="light" width="auto"  :class="['menuIcon',isCollapsed ? 'leftMenu':'']" class="menuClass">
                            <MenuItem name="5-1" to="/">
                                <Icon type="ios-home-outline"></Icon>
                                <span>{{home.title}}</span>
                            </MenuItem>
                            <MenuItem name="5-2" to="/oneArticle">
                                <Icon type="ios-book"></Icon>
                                <span>{{resume.title}}</span>
                            </MenuItem>
                            <Submenu name="6-1">
                                <template slot="title">
                                    <Icon type="ios-pricetags" />
                                    {{other.title}}
                                </template>
                                <MenuItem name="4" to="/about">
                                    {{contact.title}}
                                </MenuItem>
                                <MenuItem name="6-3">
                                    <a href="https://github.com/ydudu" target="_blank">{{ other.github.title }}</a>
                                </MenuItem>
                                <MenuItem name="6-4">
                                    <a href="https://www.cnblogs.com/Cavalary/" target="_blank">{{other.blog.title}}</a>
                                </MenuItem>
                            </Submenu>
                            <MenuItem name="5-4" to="wallpaper">
                                <Icon type="ios-image-outline"></Icon>
                                <span>{{notes.title}}</span>
                            </MenuItem>
                            <MenuItem name="5-5" @click.native="value1 = true" >
                                <Icon type="ios-musical-notes" />
                                <span>{{music.title}}</span>
                            </MenuItem>
                            <MenuItem name="5-6">
                                <a href="https://ydudu.github.io/my-website" target="_blank">
                                    <Icon type="ios-construct" /> 简历
                                </a>
                            </MenuItem>
                            <MenuItem name="5-7" to="/message">
                                <Icon type="ios-create-outline" />
                                {{message.title}}
                            </MenuItem>
                            <MenuItem name="5-8" @click.native="loginChange" v-if="logShow">
                               登录
                            </MenuItem>
                            <MenuItem name="5-9" @click.native="regin" v-if="logShow">
                               注册
                            </MenuItem>
                            <div v-if="!logShow">
                                <a style="height:50px; line-height:50px" href="javascript:void(0)">
                                   个人中心
                                   <Icon type="ios-arrow-down"></Icon>
                                </a> 
                                <MenuItem name="5-11" to="/perCenter">
                                    个人资料
                                </MenuItem>
                                <MenuItem name="5-12" @click.native="singOut" >
                                    退出登录
                                </MenuItem>
                            </div>  
                        </Menu>
                    </div>
                </Layout>
            </Col>
        </Row>
    </div>
</template>
<script>
    import vue from 'vue'
    import login from '../login/login'
    import {mapState} from 'vuex'
    // import Music from '../music/music'
    export default {
        name: "home",
        data () {
            return {
                isCollapsed: true,
                logo: '',
                value1: false,
                show: false,
                logShow: true,
            }
        },
        computed: {
           
        },
        components: { 
            Music:() =>import('../music/music.vue')  ,
            login
        },
        methods: {
            handleRotate () {
                this.isCollapsed = !this.isCollapsed;
            },
            loginChange() {
                this.show = true
            },
            //登录成功和点击删掉都会执行
            acceptIsShow(e) {
                 this.show = e
            },
            //登录成功隐藏掉登录注册界面，显示个人中心
            changeLog(e){
                this.logShow = e 
            },
            regin() {
                this.$Modal.warning({
                     title: '注册功能正在开发',
                    //  content: '用户名或密码错误'
                })
            },
            //退出登录
            singOut() {
                this.$router.push('/') //重定向到上一层进入时的页面
                this.logShow = true
                this.show = true
            }
        },
        computed: {
            ...mapState({
                home: state => state.menu.home,
                resume: state => state.menu.resume,
                other: state => state.menu.other,
                contact: state => state.menu.contact,
                notes: state => state.menu.notes,
                music: state => state.menu.music,
                message: state => state.menu.message
            })
        }
    }
</script>
<style lang="scss">
        @import '../../assets/ScssRem/ScssRem.scss';
        .layout{
            .ivu-row{
                .ivu-col-span-xs-0{
                    box-shadow:0px 2px 5px rgba(0,0,0,0.5);
                    .ivu-menu{
                        height: 50px;
                        line-height: 50px;
                        padding-left: 100px;
                        padding-right: 100px;
                        box-sizing: border-box;
                        .ivu-menu-item-group-title{
                            display: none;
                        }
                        a{
                            display: block;
                        }
                        .resume-a{
                            color: rgba(255, 255, 255, 0.7);
                            &:hover{
                                color: #fff;
                            }
                        }
                        .item-login{
                            float: right;
                            position: relative;
                            padding-right: 10px;
                        }
                    }
                }
                .ivu-col-span-xs-24{
                    /*小于992px*/
                    .ivu-layout{
                        background: transparent;
                        height: 50px;
                        position: relative;
                        .layout-header-bar{
                            height: 50px;
                            background: transparent;
                            .icon-box{
                                position: fixed;
                                z-index: 1000;
                                left: 20px;
                                height: 50px;
                                width: 50px;
                                cursor: pointer;
                                .spanIcon{
                                    position: absolute;
                                    display: block;
                                    width: 34px;
                                    height: 3px;
                                    background: #fff;
                                    transition-duration: 0.4s;
                                }
                                .top{
                                    top: 15px;
                                }
                                .center{
                                    top: 25px;
                                }
                                .bottom{
                                    top: 35px;
                                }
                                .RotateIcon{
                                    transform: translateY(10px) rotate(45deg);
                                }
                                .theRotateIcon{
                                    transform: translateY(-10px) rotate(-45deg);
                                }
                                .RotateIconWidth{
                                    width: 0;
                                }
                            }
                        }
                    }
                    .menu-wrapper{
                        .ivu-menu-vertical.ivu-menu-light:after{
                            width: 0;
                        }
                        .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
                            width: 0;
                        }
                        .menuClass{
                            position: fixed;
                            width: 300px!important;
                            height: 100%;
                            left: 0;
                            margin-top: -50px;
                            padding-top: 45px;
                            z-index:999;
                            background: rgb(54, 58, 58);
                            transition: all .4s;
                            .ivu-menu-item{
                                height: 50px;
                                line-height: 50px;
                                padding: 0;
                                color: #fff;
                            }
                            .ivu-menu-light,.ivu-menu-vertical,.ivu-menu-item-active:not(.ivu-menu-submenu){
                                background: #4ead71;
                            }
                            a{
                                display: block;
                                color: #fff;
                            }
                            .ivu-menu-submenu{
                                .ivu-menu-submenu-title{
                                    color: #fff
                                }
                                .ivu-menu{
                                    position: relative;
                                    background: #000;
                                    .ivu-menu-item{
                                        padding-left: 0!important;
                                    }
                                    a{
                                        display: block;
                                        color: #fff;
                                    }
                                }
                            }

                        }
                        .leftMenu{
                            left: -300px;
                        }

                    }
                   }

            }

        }
</style>