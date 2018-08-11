Page({
  data: {
    items: [
      {
        name: 'USA',
        value: '美国'
      }, {
        name: 'CHN',
        value: '中国',
        checked: 'true'
      }, {
        name: 'BRA',
        value: '巴西'
      }, {
        name: 'JPN',
        value: '日本'
      }, {
        name: 'ENG',
        value: '英国'
      }, {
        name: 'TUR',
        value: '法国'
      }
    ],
    timer: {
      hh: '',
      mm: '',
      ss: ''
    },
    questionData: [
      {
        title: '根据《中华人民共和国消防法》的规定，国务院公安部门规定的（）和其他特殊建设工程，建设单位应当将消防设计文件报送公安机关消防机构审核。'
      }
    ],
    activedIndex: 0,
    radioVal: '',
    initTime: 3 // 秒
  },
  setTimer: function () {
    var _this = this
    var time = this.data.initTime
    var countDwon = setInterval(function () {
      if (time === 1) {
        clearInterval(countDwon)
        wx.navigateTo({url: '../online/my-score'})
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
    this.setData({
      activedIndex: this.data.activedIndex - 1
    })
  },
  // 下一题
  nextTab: function () {
    this.setData({
      activedIndex: this.data.activedIndex + 1
    })
  },
  // 去答题卡
  toCard: function () {
    wx.navigateTo({url: '../online/onlinetest'})
  },
  onLoad: function() {
    this.setTimer()
  }
})
