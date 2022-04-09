<template>
  <div class="toast" v-if="isShow">
      {{ message }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show (message, delay = 1000) {
      console.log('1')
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, delay)
    }
  }
}
</script>

<style>
.toast{
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: black;
  color: wheat;
  line-height: 80px;
  text-align: center;
  width: 100px;
  height: 80px;
  z-index: 999;
}
</style>
