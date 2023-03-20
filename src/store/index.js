import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage.js'

Vue.use(Vuex)
const TOKEN_KEY = 'TOUTIAO_USER'
export default new Vuex.Store({
  state: {
    // user是一个对象，用来存储当前用户的token信息
    user: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      // 为了防止刷新丢失，我们需要把数据备份到本地存储
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {},
  modules: {}
})
