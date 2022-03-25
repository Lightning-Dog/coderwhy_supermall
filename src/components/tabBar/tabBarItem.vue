<template>
    <div class="tabBarItem">
        <slot name="itemIcon"></slot>
        <slot name='itemText'></slot>
    </div>
</template>
<script>

export default {
  name: 'tabBarItem'
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
</style>
