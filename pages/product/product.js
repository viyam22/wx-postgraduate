Page({
  data: {
    tabs: ['课程包', '书籍', '课程'],
    activeTab: 0,
    data: [{
      title: '根据《中华人民共和国消防法》的规定，国务院公安部门规定的（）和其他特殊建设工程，建设单位应当将消防设计文件报送公安机关消防机构审核。',
      value: [ 
        ''
      ]
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
  },
  // 切换tab
  selectTab: function(e) {
    this.setData({ activeTab: e.target.dataset.index })
  },
    // 课程详情
    toDesc: function (e) {
      var id = e.target.dataset.id
      // 加上id跳到课程详情
      wx.navigateTo({url: '../product/desc?id=' + id})
    },
})
