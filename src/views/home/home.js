import { request } from '@/network/request.js'

export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods (config) {
  return request({
    url: '/home/data',
    params: {
      'type': config.type,
      'page': config.page
    }
  })
}
