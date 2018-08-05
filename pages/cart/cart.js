var app = getApp()
Page({
  data: {
    carts: [{
      id:1,
      selected:false,
      image:"../../assets/index_into2.png",
      goods_name:"19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）",
      spec_key_name:"免费试听",
      goods_num:1,
      member_goods_price:29
    }, {
      id: 2,
      selected: false,
      image: "../../assets/index_into2.png",
      goods_name: "19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）",
      spec_key_name: "免费试听",
      goods_num: 1,
      member_goods_price: 29
    },{
      id: 3,
      selected: false,
      image: "../../assets/index_into2.png",
      goods_name: "19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）",
      spec_key_name: "免费试听",
      goods_num: 1,
      member_goods_price: 29
      }, {
        id: 4,
        selected: false,
        image: "../../assets/index_into2.png",
        goods_name: "19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）",
        spec_key_name: "免费试听",
        goods_num: 1,
        member_goods_price: 29
      },
      {
        id: 5,
        selected: false,
        image: "../../assets/index_into2.png",
        goods_name: "19考研蜕变标准  政英+专业课1V1（赵鑫全讲师）",
        spec_key_name: "免费试听",
        goods_num: 1,
        member_goods_price: 29
      }
    ],
    goodsList: [],
    empty: false,
    minusStatuses: ['disabled', 'disabled', 'normal', 'normal', 'disabled'],
    selectedAllStatus: true,
    total: ''
  },
  onLoad: function (option) {
  },

  bindMinus: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var num = this.data.carts[index].goods_num;
    // 如果只有1件了，就不允许再减了
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 购物车数据
    var carts = this.data.carts;
    carts[index].goods_num = num;
    // 按钮可用状态
    var minusStatuses = this.data.minusStatuses;
    minusStatuses[index] = minusStatus;
    // 将数值与状态写回
    this.setData({
      carts: carts,
      minusStatuses: minusStatuses
    });
    // update database
    //carts[index].save();
    this.saveNum(carts[index].id, num);
    this.sum();
  },
  bindPlus: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var num = this.data.carts[index].goods_num;
    // 自增
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 购物车数据
    var carts = this.data.carts;
    carts[index].goods_num = num;
    // 按钮可用状态
    var minusStatuses = this.data.minusStatuses;
    minusStatuses[index] = minusStatus;
    // 将数值与状态写回
    this.setData({
      carts: carts,
      minusStatuses: minusStatuses
    });
    this.saveNum(carts[index].id, num);
    this.sum();
  },
  bindManual: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var carts = this.data.carts;
    var num = e.detail.value;
    carts[index].goods_num = num;
    this.setData({
      carts: carts
    });
    this.saveNum(carts[index].id, num);
    this.sum();
  },
  bindCheckbox: function (e) {
    /*绑定点击事件，将checkbox样式改变为选中与非选中*/
    //拿到下标值，以在carts作遍历指示用
    var index = parseInt(e.currentTarget.dataset.index);
    //原始的icon状态
    var selected = this.data.carts[index].selected;
    var carts = this.data.carts;
    // 对勾选状态取反
    carts[index].selected = !selected;
    // 写回经点击修改后的数组
    this.setData({
      carts: carts,
    });
    // update database

    this.updataSelect(carts[index].id, carts[index].selected);
    this.sum();
  },
  bindSelectAll: function () {
    // 环境中目前已选状态
    var selectedAllStatus = this.data.selectedAllStatus;
    // 取反操作
    selectedAllStatus = !selectedAllStatus;
    // 购物车数据，关键是处理selected值
    var carts = this.data.carts;
    // 遍历
    for (var i = 0; i < carts.length; i++) {
      carts[i].selected = selectedAllStatus;
      // update selected status to db
    }
    this.setData({
      selectedAllStatus: selectedAllStatus,
      carts: carts,
    });
    this.sum();
    var open_id = app.globalData.openid;
    this.updateAllSelect(open_id, selectedAllStatus);
  },
  bindCheckout: function () {
    // 遍历取出已勾选的cid
    // var buys = [];
    var cartIds = [];
    for (var i = 0; i < this.data.carts.length; i++) {
      if (this.data.carts[i].selected) {
        // 移动到Buy对象里去
        // cartIds += ',';
        cartIds.push(this.data.carts[i].id);
      }
    }
    if (cartIds.length <= 0) {
      wx.showToast({
        title: '请勾选商品',
        icon: 'success',
        duration: 1000
      })
      return;
    }
    cartIds = cartIds.join(',');
    wx.navigateTo({
      url: '../../../../order/checkout/checkout?cartIds=' + cartIds + '&amount=' + this.data.total
    });
  },
  getCarts: function () {
    var minusStatuses = [];
    var that = this;
  },
  sum: function () {
    var carts = this.data.carts;
    // 计算总金额
    var total = 0;
    for (var i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].goods_num * carts[i].member_goods_price;
      }
    }
    var newValue = parseInt(total * 100);
    total = newValue / 100.0;
    // 写回经点击修改后的数组
    this.setData({
      carts: carts,
      total: total
    });
  },
  // 删除购物车
  deleteCart: function (e) {
    var index = parseInt(e.currentTarget.dataset.index)
    var id = this.data.carts[index].id;
    var that = this

  },
  saveNum: function (id, num) {
  },
  updataSelect: function (id, selected) {
    if (selected)
      selected = 1;
    else selected = 0;
  },
  updateAllSelect: function (id, selected) {
    if (selected)
      selected = 1;
    else selected = 0;
  }
})