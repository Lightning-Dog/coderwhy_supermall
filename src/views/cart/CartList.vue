<template>
  <div class="cart-list">
      <div :key="index" class="shop-item" v-for="(item,index) in cartList">
          <div class="item-selector">
            <div class="check-button" :class="{check: item.isCheck}" @click="checkClick(index)">
                <img src="../../assets/img/cart/tick.svg">
            </div>
          </div>
        <div class="item-img">
          <img :src="item.image" alt="商品图片" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">商品描述: {{ item.desc }}</div>
          <div class="info-bottom">
            <div class="item-price left">¥{{ item.price }}</div>
            <div class="item-count right">x{{ item.count }}</div>
          </div>
        </div>
      </div>
      <div class="end-bar">
        <div class="item-selector" style="width:70px">
          <span>全选：</span>
          <div class="check-button" :class="{check: isAllCheck}" @click="checkAllClick">
          <img src="../../assets/img/cart/tick.svg">
          </div>
        </div>
        <div class="total-price"> 合计：￥{{ totalPrice }}</div>
        <button>去结算({{ checkCount }})</button>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import { mapGetters } from 'vuex'
export default {
  name: 'cartList',
  data () {
    return {
      cartList: []
    }
  },
  computed: {
    // ...mapGetters({
    //   'cartList': 'cartList'
    // }),
    totalPrice () {
      let price = 0
      for (let i of this.cartList) {
        if (i.isCheck) {
          let sum = i.price * i.count
          price += sum
        }
      }
      return price.toFixed(2)
    },
    isAllCheck () {
      for (let i of this.cartList) {
        if (!i.isCheck) {
          return false
        }
      }
      return true
    },
    checkCount () {
      let count = 0
      for (let i of this.cartList) {
        if (i.isCheck) {
          count += 1
        }
      }
      return count
    }
  },
  methods: {
    checkClick (index) {
      this.cartList[index].isCheck = !this.cartList[index].isCheck
      Vue.set(this.cartList, index, this.cartList[index])
    },
    checkAllClick () {
      if (!this.isAllCheck) {
        for (let i = 0; i < this.cartList.length; i++) {
          if (!this.cartList[i].isCheck) {
            this.cartList[i].isCheck = true
            Vue.set(this.cartList, i, this.cartList[i])
          }
        }
      } else {
        for (let i = 0; i < this.cartList.length; i++) {
          if (this.cartList[i].isCheck) {
            this.cartList[i].isCheck = false
            Vue.set(this.cartList, i, this.cartList[i])
          }
        }
      }
    }
  },
  created () {
    this.cartList = this.$store.state.cartList
    console.log(this.cartList)
  }
}
</script>

<style scoped>
.cart-list {
  width: 100%;
  height: 100%;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 99px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: #ffffff;
}

.shop-item {
  font-size: 0;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}

.shop-item:last-child {
  border-bottom: 0;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666666;
}

.info-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin-top: 10px;
}

.info-bottom .item-price {
  color: #ff4500;
}

.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 50px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
}

.cart-bottom-price {
  margin-left: 50px;
}

.cart-bottom-price span {
  color: red;
}

.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 15px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #ff6034, #ee0a24);
}

.cart-bottom-btn button:active {
  opacity: 0.8;
}

.check-button{
    border-radius:50%;
    border:2px solid #aaa
}

.check{
    background-color:red;
    border: 2px solid red;
}
</style>
