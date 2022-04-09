<template>
    <div id="cart">
        <div class="cart-title">{{'购物车(' + cartLength + ')'}}</div>
        <cartList/>
    </div>
</template>
<script>
// 写为 import mapGetters from 'vuex' 是错误的
import { mapGetters } from 'vuex'
import cartList from './CartList.vue'
export default {
  name: 'cart',
  components: {
    cartList
  },
  computed: {
    ...mapGetters({
      'cartLength': 'cartLength'
    })
  }
}
</script>
<style scoped>
.cart-title {
  height: 50px;
  background-color: var(--color-high-text);
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 20px
;
}
</style>
