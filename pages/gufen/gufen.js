Page({
  data: {
    // type 类型 0：收费 1免费 2已购
    data: [{
      name: '鑫全考研报考估分测试卷一',
      type: 0
    },{
      name: '鑫全考研报考估分测试卷一',
      type: 1
    },{
      name: '鑫全考研报考估分测试卷一',
      type: 2
    }], 
    typeImg: [
      '../../assets/gufen_charge.png',
      '../../assets/gufen_free.png',
      '../../assets/gufen_bought.png'
    ],
    notice: [
      '李静好已经参加报考估分测试卷二考试',
      '李静好已经参加报考估分测试卷二考试',
      '李静好已经参加报考估分测试卷二考试',
      '李静好已经参加报考估分测试卷二考试',
      '李静好已经参加报考估分测试卷二考试'
    ]
  },
  toDownload: function(e) {
    console.log('@@@@@', e)
    var type = e.target.dataset.type
    if (type === 0) {
      // 收费页面
      wx.navigateTo({url: '../gufen/fee'})
    } else if (type === 1) {
      // 免费下载页面
      wx.navigateTo({url: '../post/downloadfree'})
    } else if (type === 2) {
      // 下载页面
      wx.navigateTo({url: '../post/downloadfreetwo'})
    }
  },
  onLoad: function() {
  }
})
