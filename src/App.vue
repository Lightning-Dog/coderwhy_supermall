<template>
  <div id="app">
    <tabBar>
          <tabBarItem>
            <img src="./assets/img/主页.png" slot='itemIcon'>
            <div slot='itemText'>首页</div>
          </tabBarItem>
          <tabBarItem>
            <img src="./assets/img/主页.png" slot='itemIcon'>
            <div slot='itemText'>首页</div>
          </tabBarItem>
          <tabBarItem>
            <img src="./assets/img/主页.png" slot='itemIcon'>
            <div slot='itemText'>首页</div>
          </tabBarItem>
          <tabBarItem>
            <img src="./assets/img/主页.png" slot='itemIcon'>
            <div slot='itemText'>首页</div>
          </tabBarItem>
    </tabBar>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import tabBar from './components/tabBar/tabBar.vue'
import tabBarItem from './components/tabBar/tabBarItem.vue'
export default {
  name: 'App',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
<style>

</style>
