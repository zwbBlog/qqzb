<template>
  <div id="app">
    <div id="header" v-show="!vmode">
        <Header></Header>
        <!-- <span class="qqzb_icon-guanbi guanbi" style="font-size:26px"></span> -->
    </div>
    <div id="video_content">
        <ali-player @play="played" :source="aplayer.source" :vid="aplayer.vid" :playauth="aplayer.playauth" ref="player" :height="aplayer.height"></ali-player>
        <p class="renshu">
          <span class="qqzb_icon-renshu"></span>
          <span class="subTitle">{{renshu}}人在看</span>
        </p>
    </div>
    <div id="broadcast" v-show="!vmode">
        <p>
          【公告】testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
        </p>
    </div>
    <div id="navBar" v-show="!vmode">
        <Navbar></Navbar>
    </div>
    <div id="footer" v-show="!vmode">
      <div class="footer cl" v-show="noLogin">
        <div class="footer_left fl">
            立即登录,观看更多直播
        </div>
        <div class="footer_right fr">
            <button @click="login">立即登录</button>
        </div>
      </div>
      <div class="footer" v-show="!noLogin">
          <p><img src="./assets/imgs/null.jpg" alt="" class="userImg" @click="logout"><span class="userName">牛市大boss</span></p>
      </div>
    </div>

    <Login></Login>  
    <OnlineRegister></OnlineRegister>
    <ForgetPwd></ForgetPwd>
    <SetPwd></SetPwd>


  </div>
</template>

<script>
import { MessageBox  } from "mint-ui";
import { Toast } from "mint-ui";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import OnlineRegister from "./components/OnlineRegister";
import ForgetPwd from "./components/ForgetPwd";
import SetPwd from "./components/SetPwd";
import VueAliplayer from "./components/VueAliplayer.vue";
export default {
  name: "App",
  data() {
    return {
      renshu: 0,
      vmode: false,
      aplayer: {
        height:"100%",
        source: "../static/media/80test.mp4",
        vid: "8db6e5c7ff5f4257b41e2487ec61d592",
        playauth:
          "eyJTZWN1cml0eVRva2VuIjoiQ0FJUzN3SjFxNkZ0NUIyeWZTaklxYXIzQm8zVm9lZGlqNWU1YW12OGswY3hPYmREaDdEQXRqejJJSHBLZVhkdUFlQVhzL28wbW1oWjcvWVlsck1xRnNFYkZCMlpNcHNwc2M4Sm9GUCtKcExGc3QySjZyOEpqc1ZsMDRWdmxsMnBzdlhKYXNEVkVma3VFNVhFTWlJNS8wMGU2TC8rY2lyWVhEN0JHSmFWaUpsaFE4MEtWdzJqRjFSdkQ4dFhJUTBRazYxOUszemRaOW1nTGlidWkzdnhDa1J2MkhCaWptOHR4cW1qL015UTV4MzFpMXYweStCM3dZSHRPY3FjYThCOU1ZMVdUc3Uxdm9oemFyR1Q2Q3BaK2psTStxQVU2cWxZNG1YcnM5cUhFa0ZOd0JpWFNaMjJsT2RpTndoa2ZLTTNOcmRacGZ6bjc1MUN0L2ZVaXA3OHhtUW1YNGdYY1Z5R0ZOLzducFNVUmJ2M2I0eGxMZXVrQVJtWGpJRFRiS3VTbWhnL2ZIY1dPRGxOZjljY01YSnFBWFF1TUdxQWRQTDVwZ2lhTTFyOUVQYmRnZmhtaTRBSjVsSHA3TWVNR1YrRGVMeVF5aDBFSWFVN2EwNDR4ckRoRzVnS3NNUWFnQUY2Qzl6eHF3VmdsSEFzTTJXdm11cmk1bFFRUHlYMXdndmJ4Mk91d3BRQmF0SEYrdW8wUnNURzllb2tVZmRMS0lpbkxsYlIvKys1MzlXN3BQM0k0T3h3ZjZIV2FjQTZQZVM2ZmpWQnZhd3BWSE5oNHdYR20rYk8xdUdtTXRraEhiMkExOTZUbEtYT0I4ZStEZUZ5Q1VpcVlrb21KaXdhTytGa0cxOW55SlVBUHc9PSIsIkF1dGhJbmZvIjoie1wiQ2FsbGVyXCI6XCJiY0o0ZFJHRFdRTjJnTEFvTk9nbVpwS0FMNEIxSk55YmNxaThOWkZCOERvPVxcclxcblwiLFwiRXhwaXJlVGltZVwiOlwiMjAxNy0xMC0yNVQwNjo1Mzo0N1pcIixcIk1lZGlhSWRcIjpcIjhkYjZlNWM3ZmY1ZjQyNTdiNDFlMjQ4N2VjNjFkNTkyXCIsXCJTaWduYXR1cmVcIjpcIlFHNTcwTXlrQWxzN1pxS1dTd2ppVStseTJrQT1cIn0iLCJWaWRlb01ldGEiOnsiU3RhdHVzIjoiTm9ybWFsIiwiVmlkZW9JZCI6IjhkYjZlNWM3ZmY1ZjQyNTdiNDFlMjQ4N2VjNjFkNTkyIiwiVGl0bGUiOiJXZUNoYXRfMjAxNzEwMTYxNjMzMTkiLCJDb3ZlclVSTCI6Imh0dHA6Ly92b2QubHVvYm9iYi5jb20vc25hcHNob3QvOGRiNmU1YzdmZjVmNDI1N2I0MWUyNDg3ZWM2MWQ1OTIwMDAwMS5qcGciLCJEdXJhdGlvbiI6NDIwLjB9LCJBY2Nlc3NLZXlJZCI6IlNUUy5IaUJNN2FMOEM4VVJoTU13R2Q1OG9odWtUIiwiUGxheURvbWFpbiI6InZvZC5sdW9ib2JiLmNvbSIsIkFjY2Vzc0tleVNlY3JldCI6IkRoZVdWNmJEMVBvN2pQbXJ1TFRDc25kQTFCUE5VTmpOb29iRnVEWnRqaDNlIiwiUmVnaW9uIjoiY24tc2hhbmdoYWkiLCJDdXN0b21lcklkIjoxNTY2OTk1NzgxNzM2OTg3fQ=="
      },
      player: null
    };
  },
  computed: {
    ...mapState(["noLogin"])
  },
  methods: {
    ...mapActions(["login"]),
    played() {
      console.log("play callback");
    },
    play() {
      const player = this.$refs.player.instance;
      player && player.play();
    },
    pause() {
      const player = this.$refs.player.instance;
      player && player.pause();
    },
    replay() {
      const player = this.$refs.player.instance;
      player && player.replay();
    },
    logout(){
      MessageBox.confirm('确定要退出登录吗？', '提示').then(action =>{
        Toast("已退出！");
        this.$store.dispatch('noLogin');
        console.log(action)
      }).catch(err=>{
        console.log(err)
      });
    }
  },
  components: {
    Header,
    Navbar,
    Login,
    OnlineRegister,
    ForgetPwd,
    SetPwd,
    "ali-player": VueAliplayer
  },
  mounted() {
    var self=this;
    (function() {
      var updateOrientation = function() {
        var orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
        // document.body.parentNode.setAttribute('class', orientation);
        console.log(orientation);
        if (orientation == "portrait") {
          //竖屏
          console.log('竖屏');
          self.vmode=false;
          document.getElementById('video_content').style.height=4.9+'rem';
        } else {
          //横屏
          console.log('横屏');
          self.vmode=true;
          document.getElementById('video_content').style.height="100%";
        }
      };
      var init = function() {
        updateOrientation();
        //监听resize事件
        window.addEventListener("resize", updateOrientation, false);
      };
      window.addEventListener("DOMContentLoaded", init, false);
    })();
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
  overflow: hidden;
}
#header {
  height: 1.4rem;
  background-color: rgb(255, 255, 255);
}
#video_content {
  height: 4.9rem;
  position: relative;
  background-color: rgba(175, 175, 175, 0.8);
  color: #fff;
}
#video_content .renshu {
  position: absolute;
  bottom: 0.25rem;
  font-size: 0.36rem;
  left: 0.5rem;
}
#video_content .subTitle {
  font-size: 0.24rem;
}
#broadcast {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: rgb(235, 237, 242);
  overflow: hidden;
}
#broadcast > p {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#navBar {
  /* height: 5.4rem; */
  height: 7.6rem;
  width: 100%;
  padding-bottom: 2.3rem;
  overflow-y: scroll;
}
#navBar .mint-tab-item-label {
  font-size: 0.3rem;
  width: 70%;
  margin: 0 auto;
}
.mint-navbar .mint-tab-item.is-selected {
  border: none !important;
}
.mint-tab-item.is-selected .mint-tab-item-label {
  border-bottom: 3px solid rgb(254, 102, 18);
  padding-bottom: 0.3rem;
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
.footer {
  position: absolute;
  width: 100%;
  height: 0.95rem;
  line-height: 0.95rem;
  overflow: hidden;
}
.footer_left {
  width: 5.4rem;
  text-align: center;
  font-size: 0.22rem;
  color: rgb(153, 153, 153);
}
.footer_right {
  width: 2.1rem;
  height: 100%;
}
.footer_right button {
  width: 100%;
  height: 100%;
  background-color: rgb(246, 144, 7);
  color: #fff;
  border: none;
  font-size: 0.26rem;
  font-weight: bold;
}
.footer .userName {
  font-weight: bold;
  font-size: 0.28rem;
  vertical-align: middle;
}
.footer .userImg {
  width: 0.7rem;
  height: 0.7rem;
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
  font-size: 0.45rem !important;
}

.loginModal .mint-cell-wrapper {
  border-bottom: 1px solid #ccc !important;
}

.loginModal,
.registerModal,
.forgetModal,
.setPwdModal {
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
.time {
  color: red;
}

.registerModal .modal_content,
.forgetModal .modal_content,
.setPwdModal .modal_content {
  width: 4.2rem;
  margin: 0 auto;
}
.registerModal .modal_content input,
.forgetModal .modal_content input,
.setPwdModal .modal_content input {
  width: 100%;
  outline: none;
  border: none;
  border: 1px solid #ccc;
  padding-left: 2em;
  display: block;
  margin: 0 auto;
  height: 0.6rem;
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
}

.title {
  width: 4.7rem;
  margin: 0 auto;
  height: 0.9rem;
  font-size: 0.32rem;
  font-weight: bold;
  color: rgb(255, 157, 19);
  text-align: center;
  line-height: 0.9rem;
}
.title span {
  width: 1.5rem;
  height: 0.9rem;
}
.title span:first-child {
  background: url("./assets/imgs/left.jpg") no-repeat -0.25rem center;
  background-size: cover;
}
.title span:last-child {
  background: url("./assets/imgs/right.jpg") no-repeat 0 center;
  background-size: cover;
}
</style>
