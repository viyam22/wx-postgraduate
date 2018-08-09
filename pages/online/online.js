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
    ]
  },
  onLoad: () => {
  }
})
