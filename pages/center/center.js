Page({
  data: {
  },
  toPurse: () => {
    wx.navigateTo({
      url: '../purse/purse'
    })
  },
  toIntegral: () => {
    wx.navigateTo({
      url: '../integral/integral'
    })
  },
  toOrder: () => {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  toCart: () => {
    wx.navigateTo({
      url: '../cart/cart'
    })
  },
  toScore: () => {
    wx.navigateTo({
      url: '../score/score'
    })
  },
  toTest: () => {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  toewm: () => {
    wx.navigateTo({
      url: '../ewm/ewm'
    })
  },
  toAgent: () => {
    wx.navigateTo({
      url: '../agent/agent'
    })
  },
  onLoad: () => {

  }
})
