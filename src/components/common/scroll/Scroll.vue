<template>
    <!-- ref绑定在组件上时获取的为组件对象  -->
    <!-- ref绑定在普通元素上时获取的为元素对象-->
    <div style="position:relative;height:100%">
      <div class="wrapper" ref="wrapper">
          <div class="content">
              <slot></slot>
          </div>
      </div>
      </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  methods: {
    scrollTo (x = 0, y = 0, time = 1500) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll.refresh()
      console.log('--scroll refresh--')
    }
  },
  mounted () {
    this.scroll = new BScroll(
      this.$refs.wrapper,
      {
        probeType: this.probeType,
        click: true,
        mouseWheel: true,
        observeDOM: true,
        pullUpLoad: true
      }
    )

    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  data () {
    return {
      scroll: null
    }
  }
}
</script>
<style scoped>
.wrapper{
    position: absolute;
    /* height: calc(100% - 94px); */
    top: 0;
    bottom: 0;
    z-index: 0;
}
</style>>
