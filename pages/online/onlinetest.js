Page({
  data: {
    myAnswer: [{
      num: 1,
      isSelected: true
    },{
      num: 1,
      isSelected: false
    },{
      num: 1,
      isSelected: false
    },{
      num: 1,
      isSelected: true
    },{
      num: 1,
      isSelected: true
    },{
      num: 1,
      isSelected: false
    },{
      num: 1,
      isSelected: false
    },{
      num: 1,
      isSelected: true
    },{
      num: 1,
      isSelected: true
    },{
      num: 1,
      isSelected: false
    },{
      num: 1,
      isSelected: false
    },{
      num: 1,
      isSelected: true
    },]
  },
  toExam: function() {
    wx.navigateTo({url: '../online/exam'})
  }
})
