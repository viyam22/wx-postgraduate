Page({
  data: {
    time: {
      hh: '03',
      mm: '52',
      ss: '29'
    }
  },
  // 上传
  upload: function () {
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData:{
        'user': 'test'
      },
      success: function(res){
        var data = res.data
        // 上传成功页面
        wx.navigateTo({url: '../online/loading'})
      },
      fail: function(res) {
        // 上传成功失败页面
      }
    })
  },
  // 初始化数据
  inidData: function () {
    // 接口 code...
  },
  onLoad: function () {
    this.inidData
  }
})
