Page({
  data: {
    subjectData: [{
      name: '法语专业'
    },{
      name: '西班牙语专业'
    },{
      name: '软件专业'
    },{
      name: '管理专业'
    }],
    actived: 0
  },
  selectItem: function(e) {
    this.setData({
      actived: e.target.dataset.index
    })
  },
  onLoad: () => {
  }
})
