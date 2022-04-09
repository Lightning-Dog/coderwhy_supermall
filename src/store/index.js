import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodListScroll: {},
    tabControlIndex: 0,
    scrollList: {},
    detailNavBarIndex: 0,
    cartList: [{
      'image': '//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg',
      'title': '2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮',
      'desc': '你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~',
      'price': '68.00',
      'iid': '1m745k0',
      'count': 1,
      'isCheck': true
    }]
  },
  mutations: {
    setGoodListScroll (state, scroll, name) {
      state.goodListScroll = scroll
    },
    GoodListScrollRefresh (state, name) {
      state.goodListScroll.refresh()
    },
    setScroList (state, obj) {
      state.scrollList[obj.name] = obj.scroll
      console.log('scroList' + state.scrollList)
    },
    scrollRefresh (state, name) {
      console.log(name)
      state.scrollList[name].refresh()
    },
    setTabControlIndex (state, index) {
      state.tabControlIndex = index
    },
    setDetailNavBarIndex (state, index) {
      state.detailNavBarIndex = index
    },
    debounce (func, delay) {
      var timeout = 1
      return function (params) {
        clearTimeout(timeout)
        timeout = setTimeout(
          func(params), delay
        )
      }
    },
    addCount (state, payload) {
      payload.count += 1
    },
    addToCart (state, payload) {
      payload.isCheck = true
      state.cartList.push(payload)
    },
    checkClick (state, payload) {
      console.log(state.cartList[payload].isCheck)
      state.cartList[payload].isCheck = !state.cartList[payload].isCheck
    }
  },
  actions,
  getters
})
