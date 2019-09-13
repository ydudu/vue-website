<template>
  <div class="login-wrapper" v-if="show">
    <Row type="flex" justify="center" align="middle" style="height:100%">
      <Col>
        <div class="login animated">
          <Icon
            @click.native="hideLogin"
            type="md-close"
            size="30"
            class="hover-icon"
          />
          <i-form :label-width="70">
            <Form-item label="用户名：" prop="name">
              <i-input v-model="name" placeholder="用户名"></i-input>
            </Form-item>
            <Form-item label="密码：" prop="pass">
              <i-input type="password" v-model="pass" placeholder="密码"></i-input>
            </Form-item>
            <i-button class="btn-login" type="primary" @click.prevent="submit($event)">登录</i-button>
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
  methods: {
    hideLogin() {
      this.$emit("isShow", false);
    },
    submit(e) {
      // console.log(e)
      // e.defaultPrevented
      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("pass", this.pass);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      this.$ajax
        .post(
          "https://bird.ioliu.cn/v1?url=http://www.shine20.com/text.php",
          formData,
          config
        )
        .then(res => {
            let username = res.data.text[0].name;
            let userpass = res.data.text[0].pass;
            if (this.name == username && this.pass == userpass) {
              this.$router.push("/");
              this.$emit("isShow", false);
              this.$Message.success("登录成功");
              this.name = "";
              this.pass = "";
            } else if (this.name.length == 0) {
              this.$Notice.error({
                title: "请输入用户名",
                duration: 1
              });
            } else if (this.pass.length == 0) {
              this.$Notice.error({
                title: "请输入密码",
                 duration: 1
              });
            } else if (this.name.length == 0 && this.pass.length == 0) {
              this.$Notice.error({
                title: "请输入用户名",
                duration: 1
              });
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
    background: #fff;
    width: 400px;
    border-radius: 6px;
    padding: 80px 20px;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 100vw;
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
    .btn-login {
      position: absolute;
      right: 2em;
    }
  }
}
</style>