//index.js 获取应用实例
const app = getApp()

Page({
  data: {
    bannerUrl: [
      '../../assets/index_banner.png', '../../assets/index_banner.png'
    ],
    // 入口图片
    intoData: [
      {
        imgUrl: '../../assets/index_into1.png',
        url: ''
      }, {
        imgUrl: '../../assets/index_into2.png',
        url: ''
      }, {
        imgUrl: '../../assets/index_into3.png',
        url: ''
      }, {
        imgUrl: '../../assets/index_into4.png',
        url: ''
      }
    ],
    classData: [
      {
        imgUrl: '../../assets/index_into2.png',
        title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
        type: '免费试听',
        currentPrice: '￥29',
        originPrice: '￥59.99',
        id: ''
      }, {
        imgUrl: '../../assets/index_into2.png',
        title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
        type: '免费试听',
        currentPrice: '￥29',
        originPrice: '￥59.99',
        id: ''
      }
    ],
    // 快速入口图片
    fastImg: [
      {
        imgUrl: '../../assets/index_q_into1.png',
        url: '../gufen/gufen'
      }, {
        imgUrl: '../../assets/index_q_into2.png',
        url: '../online/online'
      }, {
        imgUrl: '../../assets/index_q_into3.png',
        url: '../rank/info'
      }
    ],
    isShowToast: false, // 是否弹出提示
    integral: 5, // 签到积分
  },
  // 签到
  sign: function () {
    var _this = this

    // 签到接口
    _this.setData({isShowToast: true})
    setTimeout(() => {
      _this.setData({isShowToast: false})
    }, 3000)
  },

  // 去课程列表
  toMore: function () {
    wx.navigateTo({url: '../product/product'})
  },

  // 课程详情
  toDesc: function (e) {
    var id = e.target.dataset.id
    // 加上id跳到课程详情
    wx.navigateTo({url: '../product/desc'})
  },

  // 快速入口
  queryInto: function (e) {
    if (e.target.dataset.url === '../gufen/gufen' || e.target.dataset.url === '../online/online') {
      wx.switchTab({
        url: e.target.dataset.url,
        fail: function (err) {
          console.log('err', err)
        }
      })
    } else {
      wx.navigateTo({
        url: e.target.dataset.url,
        fail: function (err) {
          console.log('err', err)
        }
      })
    }
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({userInfo: app.globalData.userInfo, hasUserInfo: true})
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({userInfo: res.userInfo, hasUserInfo: true})
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({userInfo: res.userInfo, hasUserInfo: true})
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({userInfo: e.detail.userInfo, hasUserInfo: true})
  }
})
