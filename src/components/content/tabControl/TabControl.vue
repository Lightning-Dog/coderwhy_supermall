<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" class="tab-control-item"
        :class="{active: index === $store.state.tabControlIndex}" @click="changeIndex(index)"
        >
            <span >{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: function () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeIndex (index) {
      this.currentIndex = index
      this.$store.commit('setTabControlIndex', index)
      this.$emit('changeIndex', index)
    }
  }
}
</script>
<style>
.tab-control{
    display: flex;
    font-size: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.tab-control-item{
    flex: 1;
}
.active span{
    color: var(--color-high-text);
    border-bottom: 2px solid;
    padding: 5px;
}
</style>
