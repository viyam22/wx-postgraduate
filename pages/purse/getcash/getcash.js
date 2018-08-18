Page({
    data: {
      isShowToast: false, // 是否弹出提示
      cash:100,
      result: '',
      isShow:false,
    },
    check(e){
      var regNum = new RegExp('[0-9]', 'g');
      var rsNum = regNum.exec(e.detail.value);
      if (!rsNum) {
        this.setData({
          result: '*请输入数字',
          isShow:true
        })
      }else{
        this.setData({
          isShow: false
        })
      }
    },
    // 提示
    sign: function () {
      var _this = this
      _this.setData({ isShowToast: true })
      setTimeout(() => {
        _this.setData({ isShowToast: false })
      }, 3000)
    },
    onLoad: () => {

    },
})