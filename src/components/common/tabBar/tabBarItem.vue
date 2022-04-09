<template>
    <div class="tabBarItem" @click="turnTo">
        <div v-if="!isActive"><slot name="itemIcon"></slot></div> <!-- slot中的属性替换？ -->
        <div v-else><slot name="itemIcon_active"></slot></div>
        <div :style="activeStyle"><slot name='itemText'></slot></div>
    </div>
</template>
<script>

export default {
  name: 'tabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    turnTo () {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path)
      }
    }
  },
  computed: {
    isActive () {
      return (this.path === this.$route.path)
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>
<style>
.tabBarItem{
    flex: 1;
    text-align: center;
    height: 49px;
}
.tabBarItem img{
    width: 24px;
    height: 24px;
    margin-bottom: -4px;
}
.active{
    color: red;
}
</style>
