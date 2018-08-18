// pages/agent/agent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '*数据不能为空',
    isShow: false,
  },
  formSubmit: function (e) {
    var _this = this
    for(let i in e.detail.value){
      console.log(e.detail.value[i])
      if (!e.detail.value[i]){
        _this.setData({ 
          isShow: true,
         })
      }else{
        _this.setData({
          isShow: false,
        })
      }
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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