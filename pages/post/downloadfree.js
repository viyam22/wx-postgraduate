Page({
  data: {
    examTitle: '鑫全考研在线测评测试卷一'
  },
  // 下载
  download: function () {
    wx.downloadFile({
      url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.playVoice({filePath: res.tempFilePath})

          // 下载成功跳转倒计时页面
          wx.navigateTo({url: '../post/downloadfree'})
        }
      }
    })
  },
  // 查看答案
  toAnswer: function () {
    wx.navigateTo({url: '../online/answer'})
  },
  // 初始化数据
  inidData: function () {
    // 接口 code...
  },
  onLoad: function () {
    this.inidData
  }
})
