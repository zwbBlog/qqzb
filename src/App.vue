<template>
  <div id="app">
    <div id="header">
        <Header></Header>
        <!-- <span class="qqzb_icon-guanbi guanbi" style="font-size:26px"></span> -->
    </div>
    <div id="video_content">
        <p class="renshu">
          <span class="qqzb_icon-renshu"></span>
          <span class="subTitle">{{renshu}}人在看</span>
        </p>
    </div>
    <div id="broadcast">
        <p>
          【公告】testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
        </p>
    </div>
    <div id="navBar">
        <Navbar></Navbar>
    </div>
    <div id="footer">
      <div class="footer cl" v-show="noLogin">
        <div class="footer_left fl">
            立即登录,观看更多直播
        </div>
        <div class="footer_right fr">
            <button @click="login">立即登录</button>
        </div>
      </div>
      <div class="footer" v-show="!noLogin">
          <p><img src="./assets/imgs/null.jpg" alt="" class="userImg"><span class="userName">牛市大boss</span></p>
      </div>
    </div>

    <Login></Login>  
    <OnlineRegister></OnlineRegister>
    <ForgetPwd></ForgetPwd>
    <SetPwd></SetPwd>


  </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from './components/Login'
import OnlineRegister from './components/OnlineRegister'
import ForgetPwd from './components/ForgetPwd'
import SetPwd from './components/SetPwd'
export default {
  name: "App",
  data() {
    return {
      renshu:0,
    };
  },
  computed:{
    ...mapState(['noLogin'])
  },
  methods: {
    ...mapActions(["login"])
  },
  components: {
    Header,
    Navbar,
    Login,
    OnlineRegister,
    ForgetPwd,
    SetPwd
  },
  mounted(){
    
  }
};
</script>

<style>
@import url("./assets/css/reset.css");
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#header {
  height: 1.4rem;
  background-color: rgb(255, 255, 255);
}
#video_content {
  height: 4.9rem;
  position: relative;
}
#video_content .renshu{
  position: absolute;
  bottom: 0.5rem;
  font-size: 0.36rem;
  left: 0.5rem;
}
#video_content .subTitle{
  font-size: 0.24rem;
}
#broadcast {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: rgb(235, 237, 242);
  overflow: hidden;
}
#broadcast>p{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#navBar {
  height: 5.4rem;
  width: 100%;
  overflow-y: scroll;
}
#navBar::-webkit-scrollbar {
  display: none;
}
#footer {
  height: 0.95rem;
  position: fixed;
  bottom: 0;
  background-color: rgb(247, 247, 247);
  width: 100%;
}
.footer{
  position: absolute;
  width: 100%;
  height: 0.95rem;
  line-height: 0.95rem;
  overflow: hidden;
}
.footer_left{
  width: 5.4rem;
  text-align: center;
  font-size: 0.22rem;
  color:rgb(153,153,153) 
}
.footer_right{
  width: 2.1rem;
  height: 100%;
}
.footer_right button{
  width: 100%;
  height: 100%;
  background-color:rgb(246,144,7);
  color:#fff;
  border: none;
  font-size: 0.26rem 
}
.footer .userName{
  font-weight: bold;
  font-size: 0.28rem;
  vertical-align: middle
}
.footer .userImg{
  width:0.7rem;
  height:0.7rem;
}
.close {
  position: absolute;
  right: -0.2rem;
  top: -0.2rem;
  width: 0.5rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  color: #ccc;
  font-size: 0.45rem;
}

.loginModal .mint-cell-wrapper {
  border-bottom: 1px solid #ccc !important;
}

.loginModal,.registerModal,.forgetModal,.setPwdModal{
  position: fixed;
  width: 5.2rem;
  top: 50%;
  left: 50%;
  z-index: 999;
  margin-left: -2.6rem;
  border-radius: 0.2rem;
  border: 1px solid #ccc;
  box-shadow: 2px 5px 5px #ccc;
  background: #fff;
}

.getYzm,
.djs {
  font-size: 0.12rem;
  vertical-align: middle;
  border-left: 1px solid #ccc;
  padding-left: 0.3rem;
}
.time{
  color: red
}

.registerModal .modal_content,.forgetModal .modal_content,.setPwdModal .modal_content{
  width: 4.2rem;
  margin: 0 auto;
}
.registerModal .modal_content input,.forgetModal .modal_content input,.setPwdModal .modal_content input{
  width: 100%;
  outline: none;
  border:none;
  border:1px solid #ccc;
  padding-left: 2em;
  display:block;
  margin: 0 auto;
  height:0.6rem;
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
}


.title{
  width: 4.7rem;
  margin: 0 auto;
  height: 0.9rem;
  font-size: 0.32rem;
  font-weight: bold;
  color: rgb(255, 157, 19);
  text-align: center;
  line-height: 0.9rem;
}
.title span{
  width: 1.5rem;
  height: 0.9rem;
}
.title span:first-child{
  background: url("./assets/imgs/left.jpg") no-repeat -0.25rem center;
  background-size: cover
}
.title span:last-child{
  background: url("./assets/imgs/right.jpg") no-repeat 0 center;
  background-size: cover
}


</style>
