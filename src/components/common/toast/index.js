import Vue from 'vue'
import Toast from './Toast'

const obj = {}

obj.install = function (vue) {
  // 创建组件封封装器
  const constructor = Vue.extend(Toast)
  // 创建组件对象
  const toast = new constructor()
  // 将组件手动挂载到一个元素上（div
  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
