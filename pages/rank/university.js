Page({
  data: {
    universityData: [{
      name: '化工学院'
    },{
      name: '新闻学院'
    },{
      name: '服装学院'
    },{
      name: '化工大学'
    },{
      name: '化工大学'
    }],
    actived: 0
  },
  selectItem: function(e) {
    this.setData({
      actived: e.target.dataset.index
    })
    setTimeout(function () {
      wx.navigateTo({url: '../rank/select-subject'})
    }, 1500)
  },
  onLoad: () => {
  }
})
