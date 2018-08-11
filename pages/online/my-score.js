Page({
  data: {
    classData: [{
      imgUrl: '../../assets/index_into2.png',
      title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
      type: '免费试听',
      currentPrice: '￥29',
      originPrice: '￥59.99',
      id: ''
    },{
      imgUrl: '../../assets/index_into2.png',
      title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
      type: '免费试听',
      currentPrice: '￥29',
      originPrice: '￥59.99',
      id: ''
    }],
    isFinish: true
  },

  // 课程详情
  toDesc: function (e) {
    var id = e.target.dataset.id
    // 加上id跳到课程详情
    wx.navigateTo({url: '../product/desc?id=' + id})
  },

  // 查看答案
  toAnswer: function () {
    wx.navigateTo({url: '../online/answer'})
  },

  // 查看排名
  toRank: function () {
    wx.navigateTo({url: '../rank/rank'})
  },

  // 初始化数据
  inidData: function () {
    // 接口 code...
  },

  onLoad: function () {
    this.inidData
  }
})
