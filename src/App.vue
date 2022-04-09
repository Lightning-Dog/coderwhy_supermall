<template>
  <div id="app" style="height:100%">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <MainTabBar/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style>
 @import './assets/css/base.css';
</style>
