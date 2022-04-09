<template>
    <div>
        <NavBar>
            <div slot='left' @click="backHome">
                <img src="@/assets/img/common/back.svg" style="margin-top:12px;margin-left:15px">
            </div>
            <div  slot="center" class="nav-bar">
                <div v-for="(item, index)
                    in titles" :key="index"
                    :class="{active: index === currentIndex}"
                    @click="changeIndex(index)"
                >
                    {{ item }}
                </div>
            </div>
        </NavBar>
    </div>
</template>
<script>
import NavBar from '@/components/common/navBar/NavBar'
export default {
  name: 'detailNavBar',
  components: { NavBar },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  // props: {
  //   scrollIndex: {
  //     type: Number,
  //     default: 0
  //   }
  // },
  methods: {
    changeIndex (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backHome () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.nav-bar{
    display: flex;
}
.nav-bar div{
    flex: 1;
}
.active{
    color: var(--color-high-text);
    /* box-shadow: 0 2px 0 var(--color-high-text); */
}
</style>
