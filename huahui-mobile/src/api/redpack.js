import request from '@/utils/request'

export default {
  // 可提现金额
  getCanCashSum: function () {
    return request({
      url: '/shop/redPack/canCashSum',
      method: 'post'
    })
  },
  // 总金额
  getCashSum: function () {
    return request({
      url: '/shop/redPack/cashSum',
      method: 'post'
    })
  },
  // 提现记录
  getCashList: function () {
    return request({
      url: '/shop/redPack/getCashList',
      method: 'post'
    })
  },
  // 提现操作
  cash: function () {
    return request({
      url: '/shop/redPack/cash',
      method: 'post'
    })
  },
  // 领取红包
  redpack: function () {
    return request({
      url: '/shop/redPack/open/redpacket',
      method: 'post'
    })
  },

}

