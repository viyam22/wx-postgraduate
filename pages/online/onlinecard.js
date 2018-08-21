Page({
  data: {
    myAnswer: [{
      num: 1,
      isSelected: true,
      isWarn: true
    },{
      num: 1,
      isSelected: false,
      isWarn: false
    },{
      num: 1,
      isSelected: false,
      isWarn: false
    },{
      num: 1,
      isSelected: true,
      isWarn: true
    },{
      num: 1,
      isSelected: true,
      isWarn: false
    },{
      num: 1,
      isSelected: false,
      isWarn: false
    },{
      num: 1,
      isSelected: false,
      isWarn: false
    },{
      num: 1,
      isSelected: true,
      isWarn: true
    },{
      num: 1,
      isSelected: true,
      isWarn: true
    },{
      num: 1,
      isSelected: false,
      isWarn: false
    },{
      num: 1,
      isSelected: false,
      isWarn: false
    },{
      num: 1,
      isSelected: true,
      isWarn: false
    },]
  },
  toResult: function() {
    wx.navigateTo({url: '../online/result'})
  }
})
