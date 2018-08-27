Page({
  data: {
    isExam: true,  // 是否在答题，否则显示答题卡
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
    radioVal: null,    // 选择答案的下标
    initTime: 300, // 秒
    wrongIndex: [],     // 错误题目index集合
    shineUpon: {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D'
    },
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
      radioVal: this.data.questionData[this.data.activedIndex - 1].mySelect 
    })
  },
  
  // 下一题
  nextTab: function (e) {
    var _this = this
    // 最后一题到成绩页面
    if (this.data.activedIndex >= this.data.questionData.length - 1) {
      wx.redirectTo({url: '../online/my-score'})
    } else {
      // 答题接口 code...
      this.setData({
        activedIndex: this.data.activedIndex + 1,
        radioVal: this.data.questionData[this.data.activedIndex + 1].mySelect 
      })
    }
  },
  // 去答题卡
  toCard: function () {
    this.setData({ isExam: false })
  },
  // 返回答题
  toExam: function(e) {
    this.setData({
      isExam: true,
      activedIndex: e.target.dataset.index
    })
  },
  onLoad: function() {
    this.setTimer()
  }
})
