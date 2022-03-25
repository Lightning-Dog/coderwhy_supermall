<template>
    <div id='tabBar'>
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'tabBar',
  data () {
    return {
      data: 'data'
    }
  }
}
</script>
<style>
#tabBar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
