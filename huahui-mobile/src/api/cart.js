import request from '@/utils/request'

export default {
  count: function () {
    return request({
      url: '/shop/cart/count',
      method: 'get'
    })
  },
  queryByUser: function () {
    return request({
      url: '/shop/cart/queryByUser',
      method: 'get'
    })
  },
  add: function (params) {
    return request({
      url: '/shop/cart/add',
      method: 'POST',
      data: params
    })
  },
  update: function (id, count) {
    return request({
      url: '/shop/cart/update/' + id + '/' + count,
      method: 'POST',
    })
  },
  delete: function (data) {
    return request({
      url: '/shop/cart/delete?id=' + data.id,
      method: 'DELETE',
      data: data
    })
  }
}
