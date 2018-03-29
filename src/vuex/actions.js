import { Toast } from 'mint-ui';
var timer=null;
const actions = {
  //进入login弹窗
  login: ({
    commit,
    state
  }, opt) => {
    state.loginModal = true;
    commit('login')
  },
  //关闭所有弹窗
  closeModal: ({
    commit,
    state
  }, opt) => {
    state.loginModal = false;
    state.registerModal = false;
    state.forgetModal = false;
    state.setPwdModal = false;
    clearInterval(state.timer);
    commit('closeModal')
  },
  //进入注册弹窗
  register: ({
    commit,
    state
  }, opt) => {
    state.loginModal = false;
    state.forgetModal = false;
    state.setPwdModal = false;
    state.registerModal = true;
    commit('register')
  },
  //进入忘记密码弹窗
  forgetPwd: ({
    commit,
    state
  }, opt) => {
    state.loginModal = false;
    state.setPwdModal = false;
    state.registerModal = false;
    state.forgetModal = true
    commit('forgetPwd')
  },
   //进入设置密码弹窗
  setPwd: ({
    commit,
    state
  }, opt) => {
    state.loginModal = false;
    state.setPwdModal = true;
    state.registerModal = false;
    state.forgetModal = false
    commit('setPwd')
  },
  //获取验证码
  getYzm:({commit,state},opt) =>{
    var reg=/^[1][3,4,5,7,8][0-9]{9}$/gi
    console.log(opt);
    if(!reg.test(opt)){
      Toast('手机号非法，请重试！');
      return false;
    }
    state.djs = true;
    state.timer = setInterval(() => {
      state.time--;
      if (state.time <= 0) {
        clearInterval(state.timer);
        state.djs = false;
        state.time = 60;
      }
    }, 1000);
  },
  //成功登录
  loginOk: ({
    commit,
    state
  }, opt) => {
    state.noLogin = false;
    commit('loginOk');
    Toast("恭喜您登录成功！");
  },
  //退出登录
  noLogin: ({
    commit,
    state
  }, opt) => {
    state.noLogin = true;
    commit('noLogin');
    Toast("已退出！");
  }
};


export default actions;
