<template>
    <div id="homeRecommend">
        <div v-for="(item,index) in recommends" :key="index" class="homeRecommendItem">
           <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      data: []
    }
  },
  props: {
    recommends: {
      type: Array,
      default () {
      }
    }
  },
  created () {
  }
}
</script>
<style>
#homeRecommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 10px;
    border-bottom: 8px solid #eee;
}
.homeRecommendItem{
    flex:1
}
.homeRecommendItem img{
    height: 65px;
    width: 65px;
    margin-bottom: 10px;
}
</style>
