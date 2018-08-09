Page({
  data: {
    provinceArr: ['请选择', '美国', '中国', '巴西', '日本'],
    provinceIndex: 0,
    universityArr: ['请选择', '院校1', '院校2', '院校3'],
    universityIndex: 0,
    subjectArr: ['请选择', '专业1', '专业2', '专业3'],
    subjectIndex: 0,
    provinceClass: 'value defalut-color',
    universityClass: 'value defalut-color',
    subjectClass: 'value defalut-color',
    inputValue: ''   //考试分数
  },
  // 选择省份
  pickProvince: function(e) {
    this.setData({
      provinceIndex: e.detail.value,
      provinceClass: e.detail.value === 0 ? 'value defalut-color' : 'value'
    })
  },
  // 选择院校
  pickUniversity: function(e) {
    this.setData({
      universityIndex: e.detail.value,
      universityClass: e.detail.value === 0 ? 'value defalut-color' : 'value'
    })
  },
  // 选择专业
  pickSubject: function(e) {
    this.setData({
      subjectIndex: e.detail.value,
      subjectClass: e.detail.value === 0 ? 'value defalut-color' : 'value'
    })
  },
  // 提交数据
  submitData: function() {
    var postData = {
      // 省份
      province: this.data.provinceArr[this.data.provinceIndex],
      // 院校
      university: this.data.universityArr[this.data.universityIndex],
      // 专业
      subject: this.data.subjectArr[this.data.subjectIndex],
      inputValue: this.data.inputValue    // 考试分数
    }
    
    if (!postData.province) {
      wx.showToast({
        title: '请选择省份！',
        icon: 'none',
        duration: 2000
      })
      return
    } else if (!postData.university) {
      wx.showToast({
        title: '请选择院校！',
        icon: 'none',
        duration: 2000
      })
      return
    } else if (!postData.subject) {
      wx.showToast({
        title: '请选择专业！',
        icon: 'none',
        duration: 2000
      })
      return
    } else if (!postData.inputValue) {
      wx.showToast({
        title: '请填写分数！',
        icon: 'none',
        duration: 2000
      })
      return
    }

    // 提交数据接口
    // code...

    wx.navigateTo({url: '../rank/rank'})
  },

  // 考试分数
  getScore: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  onLoad: function() {
  }
})
