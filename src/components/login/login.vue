<template>
  <div class="login-wrapper animated fadeIn" v-if="show">
    <Row type="flex" justify="center" align="middle" style="height:100%">
      <Col>
        <div class="login">
          <Icon
            @click.native="hideLogin"
            type="md-close"
            size="30"
            class="hover-icon"
          />
          <i-form :label-width="70">
              <label for="user">用户名</label>
              <i-input v-model="name" id="user" placeholder="请输入用户名"></i-input>
              <br>
              <br> 
              <label for="pass">密码</label>
              <i-input id="pass" type="password" v-model="pass" placeholder="请输入密码"></i-input>
              <br>
              <br>
              <br>
              <i-button class="btn-login" type="primary" @click.prevent="submit($event)" long>登录</i-button>
          </i-form>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  created(){
    this.name =  this.getCookie('username')
    let that = this
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode:e.which //document.all为真表示兼容ie
      if(keycode == 13) {
         that.submit()
         return false
      }
    }
  },
  methods: {
    hideLogin() {
      this.$emit("isShow", false);
    },
    //设置cookie
    setCookie(name,value,iDay) {
      let oDate = new Date()
      oDate.setDate(oDate.getDate()+iDay)
      document.cookie =name+'='+value+';expires='+oDate;
    },
    //获取cookie
    getCookie(name){
      let arr = document.cookie.split('; ');
      for(let i=0;i<arr.length;i++){
        let arr2 = arr[i].split('=');
        if(arr2[0] == name) {
          return arr2[1]
        }
      }
      return ''
    },
    //清楚cookie
    removeCookie(name) {
      setCookie(name,1-1)
    },
    submit(e) {
      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("pass", this.pass);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      this.$ajax.post(
          "https://bird.ioliu.cn/v1?url=http://www.shine20.com/text.php",
          formData,
          config
        )
        .then(res => {
            let username = res.data.text[0].name;
            let userpass = res.data.text[0].pass;
            //用户名和密码都正确
            if (this.name == username && this.pass == userpass) {
              this.$router.push("/perCenter"); //登录成功跳转到该页面
              this.$emit("isShow", false);
              this.$emit('logShow', false);
              this.$Message.success("登录成功");
              this.setCookie('username',this.name,1)
            
            } else if (this.name.length == 0) {
              this.$Message.warning('请输入用户名');
            } else if (this.pass.length == 0) {
              this.$Message.warning('请输入密码');
            } else if (this.name.length == 0 && this.pass.length == 0) {
              this.$Message.warning('请输入用户名');
            } else {
              this.$Modal.error({
                title: "错误",
                content: "用户名或密码错误"
              });
            }
        })
        .catch(err => {
          console.log("失败" + err);
        });
    }
  }
};
</script>

<style lang="scss">
.login-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: auto;
  top: 0;
  background: rgba(55, 55, 55, 0.6);
  z-index: 1000;
  .login {
    background: hsla(0,0%,100%,.9);
    width: 400px;
    border-radius: 6px;
    padding: 80px 20px;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 100vw;
    }
    label{
      display: inline-block;
      font-size: 16px;
      float: left;
      max-width: 100%;
      margin-bottom: 5px;
    }
    .hover-icon {
      position: absolute;
      right: 0;
      top: 0;
      &:hover {
        cursor: pointer;
        background: red;
        color: #fff;
        // border: 1px solid #000;
      }
    }
  }
}
</style>