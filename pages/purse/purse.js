Page({
  data: {
    purse:198
  },
  onLoad: () => {

  },
    /** * 导航跳转 */
  navigateTo: function (e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  }
})
