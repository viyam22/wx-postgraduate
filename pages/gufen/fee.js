Page({
  data: {
    feeData: [{
      name: '订单金额',
      fee: '￥298',
      isSelect: false,   // 是否可选
      hasSelect: true    // 是否已选
    },{
      name: '可使用账户余额',
      fee: '150元',
      isSelect: true,
      hasSelect: false    // 是否已选
    },{
      name: '可使用积分100分',
      fee: '抵扣￥3',
      isSelect: true,
      hasSelect: false    // 是否已选
    },{
      name: '订单金额',
      fee: '￥298',
      isSelect: false,
      hasSelect: true    // 是否已选
    }]
  },
  selectItem: function(e) {
    var data = this.data.feeData
    var index = e.target.dataset.index
    if (!index) {
      return
    }

    if (data[index].isSelect) {
      if (data[index].hasSelect) {
        data[index].hasSelect = false
      } else {
        for (var i = 0; i < data.length; i++) {
          if (data[i].isSelect) {
            data[i].hasSelect = false
          }
        }
        data[index].hasSelect = true
      }
      this.setData({
        feeData: data
      })
    }
  },
  payment: function() {
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success':function(res){
        // 支付成功跳转下载页面
        wx.navigateTo({url: '../post/downloadcharges'})
      },
      'fail':function(res){
      }
   })
  },
  // 初始化数据
  initData: function() {
    // 接口
    // code...
  },
  onLoad: () => {
  }
})
