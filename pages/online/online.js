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
  toExam: function(e) {
    var type = e.target.dataset.type
    if (type === 0) {
      // 收费页面
      wx.navigateTo({url: '../online/fee'})
    } else if (type === 1) {
      // 测试页面
      wx.navigateTo({url: '../online/exam'})
    } else if (type === 2) {
      // 测试页面
      wx.navigateTo({url: '../online/exam'})
    }
  },
  onLoad: function() {
  }
})
