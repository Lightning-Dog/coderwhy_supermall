<template>
  <div class="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style>
.navBar{
    height: 44px;
    display: flex;
    line-height: 44px;
    box-shadow: 0 0 2px grey;
}
.left , .right{
    width: 60px;
}
.center{
    text-align: center;
    flex: 1;
}
</style>
