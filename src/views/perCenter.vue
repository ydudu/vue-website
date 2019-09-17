<template>
  <div class="per-center">
      <titleimg :imgTitleurl="imgTitleurl"></titleimg>
      <div class="layout">
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1" to="/OneMenus">
                        <Icon type="ios-navigate"></Icon>
                        <span>个人中心</span>
                    </MenuItem>
                    <MenuItem name="1-2" to="/changeMenus">
                        <Icon type="ios-search"></Icon>
                        <span>修改资料</span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar">
                    <div class="opacity-bg"></div>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
 import titleimg from '@/components/titleimg/titleimg'
 import {Layout,Header,Sider,Menu,MenuItem,Icon,Content} from 'iview'
export default {
    name: 'perCenter',
    data () {
            return {
                isCollapsed: false,
                imgTitleurl: "http://p16.qhimg.com/t017f7a2395db6de879.jpg"
            };
        },
        components: {
            titleimg,Layout,Header,Sider,Menu,MenuItem,Icon,Content
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
}
</script>

<style lang="scss" scoped>
    .per-center{
        width: 100vw;
        height: 100vh;
        margin-top: -100px;
        color: #fff;
        background: #fff;
        background-size: cover;
    }
    .layout{
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        width: 70%;
        top: -10vh;
        margin: 0 auto;
        @media screen and (max-width: 767px) {
            width: 100%;
        }
        @media (max-width: 991px) and (min-width: 768px){
            width: 100%;
        }
    }
    .layout-header-bar{
        background: url(http://ww4.sinaimg.cn/large/a15b4afegy1fcets6ivogj20p00ho45a) center center no-repeat;
        background-size: cover;
        height: 267px;
        padding:0;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        .opacity-bg{
            // position: absolute;
            width: 100%;
            height: 100%;
            left:0;
            top:0;
            background-color: rgba(255,255,255,.5)
        }
    }
    .ivu-layout-content{
        color: #000;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<style lang="scss">
    .ivu-layout-sider-zero-width-trigger{
        position: fixed;
        top: 0;
        right:0;
        .ivu-icon{
            
        }
    }
</style>