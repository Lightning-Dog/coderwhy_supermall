<template>
    <div style="position:relative;z-index:8;background-color:white;height:100%;padding-bottom:91px;">
      <detailNavBar style="position:relative;background-color:white;z-index:9" @titleClick='titleClick' ref='detailNavBar'/>
      <Scroll ref="scroll_detail" :probeType='3' @scroll="scrollPosition" style="">
        <detailSwiper :topImages='topImages' class="detail-swiper"></detailSwiper>
        <detailBaseInfo :goods='goods'/>
        <detailShopInfo :shop="shop"/>
        <detail-image-info :imagesInfo="detailInfo"/>
        <DetailParamInfo :paramInfo="paramInfo" ref="paramInfo"/>
        <DetailCommentInfo :commentInfo='commentInfo' ref="commentInfo"/>
        <GoodList :goodsData="recommend" ref="recommend"/>
      </Scroll>
      <BackTop v-show="backTopShow" @click.native="backTopClick()"/>
      <detailBottomBar @addCart='addCart'/>
    </div>
</template>
<script>
import detailNavBar from './childComponent/detailNavBar'
import detailSwiper from './childComponent/detailSwiper.vue'
import detailBaseInfo from './childComponent/detailBaseInfo.vue'
import detailShopInfo from './childComponent/detailShopInfo.vue'
import DetailParamInfo from './childComponent/DetailParamInfo.vue'
import DetailImageInfo from './childComponent/DetailImagesInfo.vue'
import DetailCommentInfo from './childComponent/DetailCommentInfo.vue'
import detailBottomBar from './childComponent/detailBottomBar.vue'

import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop.vue'

import GoodList from '../../components/content/goodList/GoodList.vue'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from '@/views/detail/detail'
export default {
  name: 'detail',
  components: { detailNavBar, detailSwiper, detailBaseInfo, detailShopInfo, DetailImageInfo, DetailParamInfo, Scroll, DetailCommentInfo, GoodList, detailBottomBar, BackTop },
  data () {
    return {
      iid: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      itemY: [],
      backTopShow: false
    }
  },
  created () {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then((res) => {
      // 获取轮播图图片
      this.topImages = res.data.result.itemInfo.topImages
      const data = res.data.result

      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 保存商品的详细数据
      this.detailInfo = data.detailInfo

      // 获取商品参数
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 获取评论
      if (data.rate.cRate !== 0) { this.commentInfo = data.rate.list[0] || {} }
    }).catch((err) => {
      console.log(err)
    })

    // 获取推荐列表
    getRecommend().then((res) => {
      this.recommend = res.data.data.list
    })

    // $nextTick的使用 值有可能错误
    // this.$nextTick(() => {
    //   this.itemY.push(0)
    //   this.itemY.push(this.$refs.paramInfo.$el.offsetTop)
    //   console.log(this.$refs.paramInfo.$el.offsetTop)
    //   this.itemY.push(this.$refs.commentInfo.$el.offsetTop)
    //   this.itemY.push(this.$refs.recommend.$el.offsetTop)
    // })

    // 暂时解决
    setTimeout(() => {
      this.itemY.push(0)
      this.itemY.push(this.$refs.paramInfo.$el.offsetTop)
      this.itemY.push(this.$refs.commentInfo.$el.offsetTop)
      this.itemY.push(this.$refs.recommend.$el.offsetTop)
      this.itemY.push(Number.MAX_VALUE)
    }, 500)
  },
  methods: {
    titleClick (index) {
      this.$refs.scroll_detail.scrollTo(0, -this.itemY[index], 500)
    },
    scrollPosition (position) {
      if (position.y <= -1000) {
        this.backTopShow = true
      } else this.backTopShow = false
      for (var i = 0; i <= this.itemY.length; i++) {
        if ((i < this.itemY.length - 1 && position.y <= -this.itemY[i] && position.y > -this.itemY[i + 1]) || (i === this.itemY.length - 1 && position.y <= -this.itemY[this.itemY.length - 1])) { this.$refs.detailNavBar.currentIndex = i }
      }
      // console.log(this.$refs.detailNavbar.currentIndex)
    },
    backTopClick () {
      // 2
      this.$refs.scroll_detail.scrollTo(0, 0, 1000) // scroll.scrollTo( X, Y, time)
    },
    addCart () {
      let product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid

      this.$store.dispatch('addCart', product).then(this.$toast.show('商品已添加', 1000))

      // this.$toast.show('商品已添加', 1000)
    }
  },
  updated () {
  },
  mounted () {
    this.$store.commit('setScroList', {
      'name': this.$route.name,
      'scroll': this.$refs.scroll_detail
    })
  }
}
</script>
<style scoped>

</style>
