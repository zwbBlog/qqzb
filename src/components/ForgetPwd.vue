<template>
  <!-- 忘记密码弹窗 -->
    <transition  enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
    <div class="forgetModal animated" v-show="forgetModal">
      <span class="close qqzb_icon-guanbi" @click="closeModal"></span>
      <div class="title cl">
          <span class="fl"></span>
          忘记密码
          <span class="fr"></span>
      </div>
      <div class="modal_content">
        <input type="number" placeholder="请输入手机号码" v-model="phoneNum">
        <div class="yzm cl">
          <input type="text" placeholder="请输入验证码" maxlength="10"  class="inYzm fl" v-model="code">
          <input v-show="!djs" type="button" @click="getYzm(phoneNum)" value="获取验证码" class="getYzm fr">
          <span v-show="djs" class="djs fr">还剩<span class="time">{{time}}</span>秒</span>
        </div>
        <p class="step" @click="next">下一步</p>
      </div>
    </div>
     </transition>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      phoneNum:"",
      code:""
    }
  },
  computed:{
      ...mapState([
        'forgetModal',
        'djs',
        'time'
    ])
  },
  methods:{
    ...mapActions(['closeModal','setPwd','getYzm']),
    next(){
      if(true){
        this.setPwd();
        this.phoneNum="";
        this.code="" 
      }
      //输入的验证码有误时，提示验证码错误，请重新输入
      //两次密码不一致时，提示密码不一致
      //Toast('验证码错误，请重新输入！');
    }
  }
}
</script>

<style scoped>
.forgetModal{
  height: 3.7rem;
  margin-top: -1.85rem;
}
.forgetModal .mint-cell-value{
  outline:none;
  border: 1px solid #ccc;
  border-radius: 0.35rem;
  height:0.6rem;
  font-size: 0.24rem;
}
.forgetModal .mint-cell-value input{
  text-indent: 2em;
}

.forgetModal .yzm{
  overflow: hidden;
}
.forgetModal .modal_content .inYzm{
  width: 100%;
}
.forgetModal .modal_content .getYzm{
  position: absolute;
  bottom:1.28rem;
  right: 0.6rem;
  border:none;
  border-radius: 0;
  height: 0.35rem;
  border-left: 1px solid #ccc;
  border-color: #ccc !important;
  width:27%;
  border-color: rgb(255, 157, 19);
  text-align: center;
  text-indent: -0.5rem;
  background-color: #fff;
  color: rgb(255, 157, 19)
}
.forgetModal .djs{
  position: absolute;
  bottom:1.5rem;
  right: 0.8rem;
  padding-left: 0.2rem;
}
.step {
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
