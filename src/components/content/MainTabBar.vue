/* eslint-disable quotes */
<template>
  <div>
    <tabBar>
      <tabBarItem path="/home">
        <img src="@/assets/img/tabbar/home.svg" slot="itemIcon" />
        <img src="@/assets/img/tabbar/home_active.svg" slot="itemIcon_active" />
        <div slot="itemText">首页</div>
      </tabBarItem>
      <tabBarItem path="/category">
        <img src="@/assets/img/tabbar/category.svg" slot="itemIcon" />
        <img
          src="@/assets/img/tabbar/category_active.svg"
          slot="itemIcon_active"
        />
        <div slot="itemText">分类</div>
      </tabBarItem>
      <tabBarItem path="/cart">
        <img src="@/assets/img/tabbar/shopcart.svg" slot="itemIcon" />
        <img
          src="@/assets/img/tabbar/shopcart_active.svg"
          slot="itemIcon_active"
        />
        <div slot="itemText">购物车</div>
      </tabBarItem>
      <tabBarItem path="/profile">
        <img src="@/assets/img/tabbar/profile.svg" slot="itemIcon" />
        <img
          src="@/assets/img/tabbar/profile_active.svg"
          slot="itemIcon_active"
        />
        <div slot="itemText">我的</div>
      </tabBarItem>
    </tabBar>
  </div>
</template>
<script>
// eslint-disable-next-line quotes
import tabBar from "@/components/common/tabBar/tabBar"
// eslint-disable-next-line quotes
import tabBarItem from "@/components/common/tabBar/tabBarItem"
export default {
  name: 'maintabbar',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
