//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerUrl: [
      '../../assets/index_banner.png',
      '../../assets/index_banner.png'
    ],
    intoData: [{
      imgUrl: '../../assets/index_into1.png',
      url: ''
    },{
      imgUrl: '../../assets/index_into2.png',
      url: ''
    },{
      imgUrl: '../../assets/index_into3.png',
      url: ''
    },{
      imgUrl: '../../assets/index_into4.png',
      url: ''
    }],
    classData: [{
      imgUrl: '../../assets/index_into2.png',
      title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
      type: '免费试听',
      currentPrice: '￥29',
      originPrice: '￥59.99'
    },{
      imgUrl: '../../assets/index_into2.png',
      title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
      type: '免费试听',
      currentPrice: '￥29',
      originPrice: '￥59.99'
    }],
    fastImg: [{
      imgUrl: '../../assets/index_q_into1.png',
      url: ''
    },{
      imgUrl: '../../assets/index_q_into2.png',
      url: ''
    },{
      imgUrl: '../../assets/index_q_into3.png',
      url: ''
    }]
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
