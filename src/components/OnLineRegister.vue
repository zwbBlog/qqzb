<template>
  <!-- 在线注册弹窗 -->
    <div class="registerModal" v-show="registerModal">
      <span class="close qqzb_icon-guanbi" @click="closeModal"></span>
      <div class="title cl">
          <span class="fl"></span>
          在线注册
          <span class="fr"></span>
      </div>
      <div class="modal_content">
        <input type="number" placeholder="请输入手机号码">
        <input type="text" placeholder="请输入验证码"  class="inYzm fl">
        <input v-show="!djs" type="button" value="获取验证码" class="getYzm fr" @click="getYzm">
        <span v-show="djs" class="djs">还剩<span class="time">{{time}}</span>秒</span>
        <input type="password" maxlength="30" placeholder="请输入密码" v-model="pwd" ref="pwd">
        <span class="eyes qqzb_icon-yanjing1" ref="eyes" @click="toggle"></span>
        <p class="register" @click="register">注册</p>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      pwd:""
    };
  },
  computed: {
    ...mapState(["registerModal","time","djs"])
  },
  methods: {
    ...mapActions(["closeModal","getYzm"]),
    //切换查看密码
    toggle(){
      // console.log(this.$refs.pwd.getAttribute("type")=='password')
      if(this.$refs.pwd.getAttribute("type")=='password'){
        this.$refs.pwd.setAttribute("type","text");
        this.$refs.eyes.className="eyes qqzb_icon-yanjing"
      }else{
        this.$refs.pwd.setAttribute("type","password");
        this.$refs.eyes.className="eyes qqzb_icon-yanjing1"
      } 
    },
    register(){
      // 	手机已注册时，提示“手机号已注册”
      //  验证码错误时，提示“验证码错误，请重新输入”
      //  未输入密码时，提示请设置密码
      //  成功注册后，即视作登录成功
      if('xx'){
        // 未成功注册
        Toast('手机号已注册！验证码错误，请重新输入！请设置密码！');
      }else{
        //注册成功
      } 
    }
  }
};
</script>

<style scoped>
.registerModal {
  height: 4.4rem;
  margin-top: -2.2rem;
}
.registerModal .modal_content {
  width: 4.7rem;
  margin: 0 auto;
}

.registerModal .modal_content .inYzm {
  width: 60%;
}
.registerModal .modal_content .getYzm {
  width: 35%;
  border-color: rgb(255, 157, 19);
  text-align: center;
  text-indent: -0.5rem;
  background-color: #fff;
  color: rgb(255, 157, 19);
}
.registerModal .djs {
  display: inline-block;
  width: 35%;
  text-align: center;
  border: none;
  border: 1px solid #ccc;
  background-color: #ccc;
  padding: 0.12rem 0.1rem;
  margin-left: 0.2rem;
  border-radius: 0.45rem;
  color: rgb(255, 157, 19);
  font-size: 0.28rem;
}
.registerModal .time {
  color: red;
}

.registerModal .modal_content .eyes {
  position: absolute;
  height: 0.45rem;
  width: 0.45rem;
  right: 0.45rem;
  bottom: 1.25rem;
  font-size: 0.45rem;
}
.registerModal .register {
  width: 100%;
  background-color: rgb(255, 157, 19);
  border-radius: 0.5rem;
  height: 0.68rem;
  color: #fff;
  line-height: 0.68rem;
  font-size: 0.26rem;
  text-align: center;
}
</style>
