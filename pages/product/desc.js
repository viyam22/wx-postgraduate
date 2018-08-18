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
    classData: {
      imgUrl: 'http://placehold.it/300x188',
      title: '19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）',
      type: '免费试听',
      currentPrice: '￥29',
      originPrice: '￥59.99',
      sale: 58452,
      descImgUrl: 'http://placehold.it/300x600'
    },
  },
  selectTab: function(e) {
    this.setData({ activeTab: e.target.dataset.index })
  },
  addToCart: function() {
    // 加入购物车接口 code...
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    })
  },
  buyNow: function() {
    this.addToCart()
    wx.navigateTo({url: '../buy/buy'})
  }
})
