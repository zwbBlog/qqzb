<template>
  <!-- 登录弹窗 -->
    <div class="loginModal" v-show="loginModal">
        <span class="close qqzb_icon-guanbi" @click="closeModal"></span>
        <ul class="modal_list cl">
          <li class="fl" :style="{color:phoneLogin?'orange':'black'}" @click="usePhone">手机快捷登录</li>
          <li class="fr" :style="{color:!phoneLogin?'orange':'black'}" @click="usePwd">账号密码登录</li>
        </ul>
        <div class="modal_content">
            <div class="phone_login" v-show="phoneLogin">
                <mt-field  placeholder="请输入手机号" v-model="phoneNum"></mt-field>
                <mt-field  placeholder="请输入验证码" v-model="yzm">
                  <span class="getYzm" v-show="!djs" @click.stop="getYzm(phoneNum)">获取验证码</span>
                  <span class="djs" v-show="djs">倒计时<span class="time">{{time}}</span>秒</span>
                </mt-field>
                <div class="rightLogin" @click="usePhoneLogin">立即登录</div>
                <p class="register" @click="register">立即注册</p>
            </div>
            <div class="pwd_login" v-show="!phoneLogin">
                <mt-field  placeholder="请输入手机号" v-model="phoneNum"></mt-field>
                <mt-field  placeholder="请输入密码" v-model="pwd"></mt-field>
                <div class="rightLogin" @click="usePwdLogin">立即登录</div>
                <p class="cl pwdBot">
                  <span class="fl" @click="forgetPwd">忘记密码</span>
                  <span class="fr register" @click="register">立即注册</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      phoneNum: "",
      yzm: "",
      pwd: "",
      phoneLogin: true
    };
  },
  computed: {
    ...mapState(["loginModal", "time", "djs"])
  },
  methods: {
    ...mapActions(["closeModal", "register", "forgetPwd", "getYzm"]),
    // ...mapMutations(['getYzm']),
    usePhone() {
      this.phoneNum = "";
      this.phoneLogin = true;
    },
    usePwd() {
      this.phoneNum = "";
      this.phoneLogin = false;
    },
    usePhoneLogin() {
      if ("xx") {
        //未成功登录
        Toast("验证码错误，请重新输入！");
      } else {
        //登录成功
        this.$store.dispatch("loginOk");
      }
    },
    usePwdLogin() {
      if ("xx") {
        //未成功登录
        Toast("手机号或密码错误，请重试！");
      } else {
        //登录成功
        this.$store.dispatch("loginOk");
      }
    }
  }
};
</script>

<style scoped>
.loginModal {
  height: 4.4rem;
  margin-top: -2.2rem;
}
.modal_list {
  height: 0.9rem;
  font-size: 0.3rem;
}
.modal_list > li {
  width: 50%;
  height: 0.5rem;
  margin-top: 0.2rem;
  line-height: 0.5rem;
  text-align: center;
}
.modal_list > li:first-child {
  border-right: 1px solid #ccc;
}
.loginModal .mint-cell-wrapper {
  border-bottom: 1px solid #ccc !important;
}
.loginModal .rightLogin {
  width: 4.7rem;
  height: 0.75rem;
  margin: 0 auto;
  text-align: center;
  line-height: 0.75rem;
  color: #fff;
  background-color: rgb(255, 157, 19);
  font-size: 0.3rem;
  margin-top: 0.15rem;
}
.phone_login .register,
.register {
  text-align: center;
  height: 0.3rem;
  margin-top: 0.2rem;
  line-height: 0.3rem;
  color: orange;
}
.loginModal .pwdBot {
  height: 0.7rem;
}
.loginModal .pwdBot span {
  width: 50%;
  height: 0.3rem;
  margin-top: 0.2rem;
  line-height: 0.3rem;
  text-align: center;
}
.loginModal .pwdBot span:first-child {
  border-right: 1px solid #ccc;
}
</style>
