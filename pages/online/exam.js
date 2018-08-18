Page({
  data: {
    timer: {
      hh: '',
      mm: '',
      ss: ''
    },
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
        mySelect: null
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
        mySelect: null
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
  setTimer: function () {
    var _this = this
    var time = this.data.initTime
    var countDwon = setInterval(function () {
      if (time === 1) {
        clearInterval(countDwon)
        wx.redirectTo({url: '../online/my-score'})
      }
      time--
      _this.changeTime(time)
    }, 1000)
  },
  changeTime: function (s) {
    var hour = Math.floor(s / 3600);
    var min = Math.floor(s / 60) % 60;
    var sec = s % 60;
    var timer = {
      hh: '',
      mm: '',
      ss: ''
    }
    if (hour < 10) {
      timer.hh = '0' + hour
    } else {
      timer.hh = hour + ":"
    }

    if (min < 10) {
      timer.mm = "0" + min;
    } else {
      timer.mm = min;
    }
    if (sec < 10) {
      timer.ss = "0" + sec;
    } else {
      timer.ss = sec;
    }
    this.setData({ timer: timer })
  },
  // 监听radio选择
  radioChange: function (e) {
    this.setData({radioVal: e.detail.value})
    console.log('radio发生change事件，携带value值为：', e.detail.value, this.data.radioVal)

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
      activedIndex: this.data.activedIndex - 1,
      isShow: true,
      radioVal: this.data.questionData[this.data.activedIndex - 1].mySelect,
      isDisabled: false
    })
  },
  // 最后一题到成绩页面
  isToRank() {
    if (this.data.activedIndex >= this.data.questionData.length - 1) {
      wx.navigateTo({url: '../online//my-score'})
    }
  },
  // 下一题
  nextTab: function (e) {
    var _this = this

    // 答对下一题
    if (this.data.radioVal == e.target.dataset.right) {
      this.isToRank()
      this.setData({
        activedIndex: this.data.activedIndex + 1,
        isShow: false,
        radioVal: -1,
        isDisabled: false
      })
    } else {   // 否则显示答案解析
      var data = this.data.questionData
      data[e.target.dataset.index].mySelect = this.data.radioVal
      this.setData({ isShow: true })
      this.setData({ isDisabled: true })

      // 默认五秒后显示下一题
      setTimeout(function() {
        _this.isToRank()
        _this.setData({
          activedIndex: _this.data.activedIndex + 1,
          isShow: false,
          radioVal: -1,
          isDisabled: false
        })
      }, 2000)
    }
  },
  // 去答题卡
  toCard: function () {
    wx.navigateTo({url: '../online/onlinetest'})
  },
  onLoad: function() {
    this.setTimer()
  }
})
