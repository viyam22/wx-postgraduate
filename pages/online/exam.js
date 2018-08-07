Page({
  data: {
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ],
    timer: {
      hh: '03',
      mm: '52',
      ss: '29'
    },
    data: [{
      title: '根据《中华人民共和国消防法》的规定，国务院公安部门规定的（）和其他特殊建设工程，建设单位应当将消防设计文件报送公安机关消防机构审核。'
    }]
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
