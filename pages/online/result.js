Page({
  data: {
    isExam: true,  // 是否在答题，否则显示答题卡
    questionData: [
      {
        title: '根据《中华人民共和国消防法》的规定，国务院公安部门规定的（）和其他特殊建设工程，建设单位应当将消防设计文件报送公安机关消防机构审核。',
        items: [
          {
            name: 'USA',
            value: '美国',
          }, {
            name: 'CHN',
            value: '中国',
            img: '../../assets/img_ad.png',
          }, {
            name: 'BRA',
            value: '巴西',
          }, {
            name: 'JPN',
            value: '日本',
          }
        ],
        analysis: '国务院公安部门规定的中型的人员密集场所和其他特殊建设工程，建设单位应当将消防设计文件报送公安机关消防机构审核',
        right: 1,
        mySelect: 2
      },{
        title: 'aaaaaaaaaaaa',
        items: [
          {
            name: 'USA',
            value: '美国',
          }, {
            name: 'CHN',
            value: '中国',
          }, {
            name: 'BRA',
            value: '巴西',
          }, {
            name: 'JPN',
            value: '日本',
          }
        ],
        analysis: '国务院公安部门规定的中型的人员密集场所和其他特殊建设工程，建设单位应当将消防设计文件报送公安机关消防机构审核',
        right: 2,
        mySelect: 2
      },
    ],
    activedIndex: 0,   // 当前题目的下标
    radioVal: -1,    // 选择答案的下标
    initTime: 300, // 秒
    wrongIndex: [],     // 错误题目index集合
    shineUpon: {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D'
    },
    isShow: false,      // 是否能够显示分析
    isDisabled: false,   // 是否不能选择
  },
  // 上一题
  preTab: function () {
    if (this.data.activedIndex === 0) {
      wx.showToast({
        title: '这是第一题',
        icon: 'none',
        duration: 2000
      })
      return
    }
    this.setData({
      activedIndex: this.data.activedIndex - 1
    })
  },
  // 最后一题到成绩页面
  isToRank() {
    if (this.data.activedIndex >= this.data.questionData.length - 1) {
      wx.redirectTo({url: '../online/my-score'})
    }
  },
  // 下一题
  nextTab: function (e) {
    this.isToRank() 
    this.setData({
      activedIndex: this.data.activedIndex + 1
    })
  },
  // 去答题卡
  toCard: function () {
    this.setData({ isExam: false })
  },
  // 回答案分析页
  toResult: function (e) {
    this.setData({
      isExam: true,
      activedIndex: e.target.dataset.index
    })
  }

})
