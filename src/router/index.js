import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Cart from '../views/cart/Cart.vue'
import Profile from '../views/profile/Profile.vue'
import Category from '../views/category/Category.vue'
import Detail from '../views/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // name重名 有没有办法修正
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    // 动态路由
    {
      name: 'detail',
      path: '/detail/:iid',
      component: Detail
    }
  ]
})
