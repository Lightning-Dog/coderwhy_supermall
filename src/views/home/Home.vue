<template>
  <div id="home" style="height:100%;" >
    <navBar class="home-nav">
      <div slot="center">购物街</div>
    </navBar>
    <TabControl
        :titles="['流行', '新款', '精选']"
        class="home-tab-control-2"
        @changeIndex="tabControl_changeIndex"
        v-show="isTaBar2Show"
      />
    <Scroll ref='scroll' :probe-type='3' @scroll="scrollPosition" @pullingUp='loadMore'>
      <Swiper>
        <!-- eslint-disable -->
        <Swiper-item v-for="(item, index) in banners" :key="index" >
          <a :href="item.link">
            <img :src="item.image" />
          </a>
        </Swiper-item>
      </Swiper>
      <Recommends :recommends="recommends" />
      <div class="feature">
        <a href="https://act.mogujie.com/zzlx67">
          <img
            style="width: 100%"
            src="@/assets/img/home/recommend_bg.jpg"
            alt=""
          />
        </a>
      </div>
      <TabControl
        :titles="['流行', '新款', '精选']"
        class="home-tab-control"
        @changeIndex="tabControl_changeIndex"
      />
      <!-- {{goods['pop'].list}} -->
      <GoodList
        class="home-good-list"
        :goodsData="goods[tabControlString].list"
      />
    </Scroll>
    <BackTop v-show="backTopShow" @click.native="backTopClick()"/>   <!-- 对组件进行监听时需要添加 native属性-->
  </div>
</template>
<script>
import { getHomeMultidata, getHomeGoods } from '@/views/home/home'

import navBar from '@/components/common/navBar/NavBar.vue'
import { Swiper, SwiperItem } from '@/components/common/swiper/'
import Scroll from '@/components/common/scroll/Scroll.vue'

import TabControl from '@/components/content/tabControl/TabControl'
import GoodList from '@/components/content/goodList/GoodList'
import BackTop from '../../components/content/backTop/BackTop.vue'

import Recommends from './childComponent/Recommend.vue'

import Detail from '../detail/Detail.vue'

export default {
  name: 'home',
  components: {
    navBar,
    Swiper,
    SwiperItem,
    Recommends,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
    Detail
  },
  data () {
    return {
      multidata: '',
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      tabControlString: 'pop',
      backTopShow: false,
      saveY: 0,
      scrollYY: 0
    }
  },
  methods: {
    // 网络方法
    getHomeMultidata () {
      getHomeMultidata()
        .then((res) => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
        .catch((err) => console.log(err))
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods({ type, page }).then((res) => {
        this.goods[type].list.push(...res.data.data.list)
        // console.log(this.goods[type].list)
        this.goods[type].page += 1
        // console.log(this.goods['pop'].list)
      })
    },
    // 组件方法
    tabControl_changeIndex (index) {
      switch (index) {
        case 0:
          this.tabControlString = 'pop'
          break
        case 1:
          this.tabControlString = 'new'
          break
        case 2:
          this.tabControlString = 'sell'
          break
      }
    },
    backTopClick () {
      // 2
      this.$refs.scroll.scrollTo(0, 0, 1000) // scroll.scrollTo( X, Y, time)
    },
    scrollPosition (position) {
      this.scrollYY = position.y
      if (position.y <= -1000) {
        this.backTopShow = true
      } else this.backTopShow = false
    },
    loadMore () {
      console.log('loadMore')
      this.getHomeGoods(this.tabControlString)
      this.$refs.scroll.finishPullUp()
    }
  },
  mounted () {
    // this.$store.commit('setGoodListScroll', this.$refs.scroll)
    this.$store.commit('setScroList', {
      'name': 'home',
      'scroll': this.$refs.scroll
    })
  },
  computed: {
    isTaBar2Show () {
      // const y = this.$store.state.scrollList['home']
      // console.log(y)
      // let x = this.$refs && this.$refs.scroll && this.$refs.scroll.scroll.y
      return this.scrollYY <= -600
    }
  },
  created () {
    // 1.
    this.getHomeMultidata()
    // 2.
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY)
    // this.$store.commit('GoodListScrollRefresh')
    this.$store.commit('scrollRefresh', 'home')
  },
  deactivated () {
    this.saveY = this.$refs.scroll.scroll.y
  }
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
#home {
  position: relative;
  padding-top: 44px;
  padding-bottom: 50px;
}
.home-tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.home-tab-control-2 {
  position: fixed;
  top: 44px;
  width: 100%;
  z-index: 9;
  background-color: #fff;
}
.home-good-list {
  z-index: 8;
}
.content {
  /* height: 555px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
