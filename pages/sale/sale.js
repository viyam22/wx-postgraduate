Page({
  data: {
    data: {
      title1: '如何赚奖金',
      content1: '这个控件在国内最通俗的称呼，正式的名称为「Badge」（徽标），Badge是指通常出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。Badge可以分为无数字和有数字两类，一般来说，如果只需让用户了解有更新或新内容必然只有一条时，使用无数字Badge，例如微信公众号更新和App版本更新采用无数字类型。',
      title2: '如何赚奖金',
      content2: '这个控件在国内最通俗的称呼，正式的名称为「Badge」（徽标），Badge是指通常出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。Badge可以分为无数字和有数字两类，一般来说，如果只需让用户了解有更新或新内容必然只有一条时，使用无数字Badge，例如微信公众号更新和App版本更新采用无数字类型。'
    }
  },
  selectItem: function(e) {
    var status = this.data.status
    var index = e.target.dataset.index
    status[index].isSelect = !status[index].isSelect
    this.setData({ status })
  },
  onLoad: function() {
  }
})
