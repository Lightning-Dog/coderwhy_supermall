export default {
  addCart (context, payload) {
    // let state = context.state
    // let Product = state.cartList.find(item => item.iid === payload.iid)
    // if (Product) {
    //   context.commit('addCount', Product)
    // } else {
    //   payload.count = 1
    //   state.cartList.push(payload)
    // }
    // console.log(state.cartList)

    const prom = new Promise((resolve, reject) => {
      let state = context.state
      let Product = state.cartList.find(item => item.iid === payload.iid)
      if (Product) {
        context.commit('addCount', Product)
      } else {
        payload.count = 1
        state.cartList.push(payload)
      }
      resolve()
      console.log(state.cartList)
    })
    return prom
  }
}
