/**
 * 初始化Vuex入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//工厂方法输出一个单例Vuex.Store模式
export default new Vuex.Store({
  state: {
    city:'上海'
  },
  /* actions: {
    changeCity (ctx,city) {
      //console.log(city)
      ctx.commit('changeCity',city)
    }
  }, */
  mutations: {
    changeCity (state,city) {
      state.city = city
    }
  }
})