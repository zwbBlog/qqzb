const mutations = {
  login(state) {
    state.loginModal = state.loginModal;
  },
  closeModal(state) {
    state.loginModal = state.loginModal;
    state.registerModal = state.registerModal;
    state.forgetModal = state.forgetModal;
    state.setPwdModal = state.setPwdModal;
    state.djs=false;
    state.time=60;
  },
  register(state) {
    state.registerModal = state.registerModal;
  },
  forgetPwd(state) {
    state.forgetModal = state.forgetModal;
  },
  setPwd(state) {
    state.setPwdModal = state.setPwdModal;
  },
  loginOk(state){
    state.noLogin = state.noLogin;
  },
  noLogin(state){
    state.noLogin = state.noLogin;
  }
};

export default mutations;
