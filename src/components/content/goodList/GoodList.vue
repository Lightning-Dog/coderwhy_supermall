<template>
    <div id="goodslist">
        <GoodListItem
          class='good-list-item'
          v-for="(item,index) in goodsData"
          :key="index"
          :goodsItem='item'
          @imgLoadComplete='imgLoadComplete'
        />
    </div>
</template>
<script>
import GoodListItem from './GoodListItem.vue'
export default {
  name: 'GoodList',
  components: {
    GoodListItem
  },
  data () {
    return {
      x: ''
    }
  },
  props: {
    goodsData: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  methods: {
    debounce (func, delay) {
      var timeout = null
      return function (params) {
        clearTimeout(timeout)
        timeout = setTimeout(
          func, delay
        )
      }
    },
    scrollRefresh () {
      this.$store.commit('scrollRefresh', this.$route.name)
    },
    imgLoadComplete () {
      this.x()
    }
  },
  mounted () {
    this.x = this.debounce(this.scrollRefresh, 500)
  }
}
</script>
<style>
#goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
}
</style>
