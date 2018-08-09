Page({
  data: {
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
    status: [{
      name: '可使用账户余额 150元',
      price: '',
      isSelect: false
    },{
      name: '可使用账户余额 150元',
      price: '￥-20',
      isSelect: true
    }],
  },
  selectItem: function(e) {
    var status = this.data.status
    var index = e.target.dataset.index
    status[index].isSelect = !status[index].isSelect
    this.setData({ status })
  },
  onLoad: function() {
  }
})
