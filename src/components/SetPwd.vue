<template>
  <!-- 设置密码弹窗 -->
    <transition  enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
    <div class="setPwdModal animated" v-show="setPwdModal">
      <span class="close qqzb_icon-guanbi" @click="closeSetPwdModal"></span>
      <div class="title cl">
          <span class="fl"></span>
          设置密码
          <span class="fr"></span>
      </div>
      <div class="modal_content">
        <input type="password" placeholder="请输入密码" v-model="onePwd" ref="onePwd">
        <input type="password" placeholder="再次确认" v-model="twoPwd" ref="twoPwd">
        <span class="qqzb_icon-yanjing1 setPwd1" @click="toggle($event,'onePwd','setPwd1')" ref="setPwd1"></span>
        <span class="qqzb_icon-yanjing1 setPwd2" @click="toggle($event,'twoPwd','setPwd2')" ref="setPwd2"></span>
        <p class="sure" @click="setPwdOk">确定</p>
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
      onePwd:'',
      twoPwd:''
    }
  },
  computed:{
      ...mapState([
        'setPwdModal'
    ])
  },
  methods:{
    ...mapActions(['closeModal']),
    toggle(e,name,icon){
      if(this.$refs[name].getAttribute("type")=='password'){
        this.$refs[name].setAttribute("type","text");
        if(this.$refs[icon].className.indexOf('qqzb_icon-yanjing1')==-1){
          this.$refs[icon].className="qqzb_icon-yanjing1 "+icon
        }else{
          this.$refs[icon].className="qqzb_icon-yanjing "+icon
        }
      }else{
        if(this.$refs[icon].className.indexOf('qqzb_icon-yanjing1')==-1){
          this.$refs[icon].className="qqzb_icon-yanjing1 "+icon
        }else{
          this.$refs[icon].className="qqzb_icon-yanjing "+icon
        }
        this.$refs[name].setAttribute("type","password");
      } 
    },
    setPwdOk(){
      //密码成功设置后，跳转到账号密码登录弹窗
      Toast('密码不一致！');
      if(true){
        this.closeModal();
        this.$store.dispatch('login');
        this.onePwd='';
        this.twoPwd=''
      } 
    },
    closeSetPwdModal(){
      this.closeModal();
      this.onePwd='';
      this.twoPwd=''
    }
  }
}
</script>

<style scoped>
.setPwdModal{
  height: 3.7rem;
  margin-top: -1.85rem;
}
.setPwd1{
  position: absolute;
  right: 0.65rem;
  bottom:2.3rem;
  font-size: 0.45rem
}
.setPwd2{
  position: absolute;
  right: 0.67rem;
  bottom:1.55rem;
  font-size: 0.45rem
}
.sure{
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
