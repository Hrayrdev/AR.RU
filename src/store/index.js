import {createStore} from 'vuex'

export default createStore({
    state: {
        winWidth: 0,
        winHeight: 0,
    },

    mutations: {
        setWinWidth(state, payload) {
            state.winWidth = payload
        },
        setWinHeight(state, payload){
            state.winHeight = payload
        }
    },

    actions: {},
    getters: {
        getWidth(state){
            return  state.winWidth
        }
    },
    modules: {}
})
