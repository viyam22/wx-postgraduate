// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classData: [{
      imgUrl: '../../assets/index_into2.png',
      title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
      type: '免费试听',
      currentPrice: '￥29',
      originPrice: '￥59.99',
      num:2
    }, {
      imgUrl: '../../assets/index_into2.png',
      title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
      type: '课程包',
      currentPrice: '￥29',
      originPrice: '￥59.99',
      num: 1
    }, {
      imgUrl: '../../assets/index_into2.png',
      title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
      type: '免费试听',
      currentPrice: '￥29',
      originPrice: '￥59.99',
      num: 1
    }],
  },
  toorderdetail(){
    wx.navigateTo({
      url: './orderdetail'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})