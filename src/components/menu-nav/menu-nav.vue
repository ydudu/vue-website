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
                            <MenuItem name="3-1">
                                <a href="https://ydudu.github.io/my-website" target="_blank">简历</a>
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
                    <Drawer title="Music" :scrollable="true" v-model="value1" width="100">
                        <music>
                        </music>
                    </Drawer>
                    <MenuItem name="4" to="/about">
                        <Icon type="ios-construct" />
                        {{contact.title}}
                    </MenuItem>
                    <MenuItem name="7" to="/message">
                        <Icon type="ios-create-outline" />
                        {{message.title}}
                    </MenuItem>
                </Menu>
            </Col>
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
                                <MenuItem name="6-5">
                                    <a href="https://ydudu.github.io/my-website" target="_blank">简历</a>
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
                            <MenuItem name="5-3" to="/about">
                                <Icon type="ios-construct"></Icon>
                                <span>{{contact.title}}</span>
                            </MenuItem>
                            <MenuItem name="5-7" to="/message">
                                <Icon type="ios-create-outline" />
                                {{message.title}}
                            </MenuItem>
                        </Menu>
                    </div>
                </Layout>
            </Col>
        </Row>
    </div>
</template>
<script>
    import vue from 'vue'
    import {mapState} from 'vuex'
    import Music from '../music/music'
    export default {
        name: "home",
        components: { Music },
        data () {
            return {
                isCollapsed: true,
                logo: '',
                value1: false
            }
        },
        methods: {
            handleRotate () {
                this.isCollapsed = !this.isCollapsed;
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
                    .ivu-menu{
                        height: 50px;
                        line-height: 50px;
                        .ivu-menu-item-group-title{
                            display: none;
                        }
                        a{
                            display: block;
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
                            background: #333;
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