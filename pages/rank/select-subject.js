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
    subjectClass: 'value defalut-color'
  },
  pickProvince: function(e) {
    this.setData({
      provinceIndex: e.detail.value,
      provinceClass: e.detail.value === 0 ? 'value defalut-color' : 'value'
    })
  },
  pickUniversity: function(e) {
    this.setData({
      universityIndex: e.detail.value,
      universityClass: e.detail.value === 0 ? 'value defalut-color' : 'value'
    })
  },
  pickSubject: function(e) {
    this.setData({
      subjectIndex: e.detail.value,
      subjectClass: e.detail.value === 0 ? 'value defalut-color' : 'value'
    })
  },
  onLoad: () => {
  }
})
