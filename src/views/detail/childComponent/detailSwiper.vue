<template>
    <div>
        <Swiper>
            <SwiperItem v-for="(item,index) in topImages" :key="index"  style="height:300px">
                <img :src="item">
            </SwiperItem>
        </Swiper>
    </div>
</template>
<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/'
export default {
  name: 'detailSwiper',
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
</style>
