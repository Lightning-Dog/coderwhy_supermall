import { request } from '@/network/request.js'

export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend () {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discount
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.realPrice
  }
}

export class Shop {
  constructor (shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor (info, rule) {
    this.image = info.images ? info.image[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}