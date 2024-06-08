import {createStore} from 'vuex'

export default createStore({
    state: {
        winWidth: 0,
        winHeight: 0,
    },

    mutations: {
        setWinWidth(state) {
            state.winWidth = window.innerWidth
        },
        setWinHeight(state){
            state.winHeight = window.innerHeight
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
