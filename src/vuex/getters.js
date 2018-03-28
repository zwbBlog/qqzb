const getters={
    loginModal(state){
        return  state.loginModal
    },
    registerModal(state){
        return  state.registerModal
    },
    forgetModal(state){
        return  state.forgetModal
    },
    setPwdModal(state){
        return  state.setPwdModal
    },
    phoneLogin(state){
        return  state.phoneLogin
    },
    noLogin(state){
        return  state.noLogin
    }
}

export default getters;