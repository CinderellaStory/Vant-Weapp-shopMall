//index.js
import Notify from '../vant/notify/notify';
import Toast from '../vant/toast/toast';  //引入toast
var cartData = require('../../api/cart.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    bottomBar:true,           //默认底部导航
    hasList: false,          // 列表是否有数据
    selectAllStatus: false,    // 全选状态，默认全选
    totalPrice:0,    //总价
  },
  onLoad: function () {
    this.setData({
      items: cartData.cartList
    });
  },
  // 减去商品
  minus(event){
    var items = this.data.items  //获取购物车列表
    var index = event.currentTarget.dataset.index;//获取当前点击事件的下标索引
    var number = items[index].number  //获取购物车里面的value值
      number--
      items[index].number=number;
      console.log("number",number);
    this.setData({
      items: items
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  // 加
  plus(e){
    var items = this.data.items  //获取购物车列表
    var index = e.currentTarget.dataset.index;//获取当前点击事件的下标索引
    var number = items[index].number  //获取购物车里面的value值
     number++
     items[index].number = number;
    this.setData({
      items: items
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  // 单选
  sigleCheck(e){
    var items = this.data.items  //获取购物车列表
    var index = e.currentTarget.dataset.index;//获取当前点击事件的下标索引
    var selected = items[index].selected  //获取购物车里面的value值
    items[index].selected = !selected;
    this.setData({
      items:items
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  // 全选
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let items = this.data.items;

    for (let i = 0; i < items.length; i++) {
      items[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      items: items
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  // 总价
  getTotalPrice() {
    let items = this.data.items;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < items.length; i++) {         // 循环列表得到每个数据
      if (items[i].selected) {                   // 判断选中才会计算价格
        total+= items[i].number * items[i].sale_price;     // 所有价格加起来
        total=total
      }
    }

    this.setData({                                // 最后赋值到data中渲染到页面
      items: items,
      totalPrice: total
    });
    console.log(this.data.totalPrice)
  },
  // 删除商品
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let items = this.data.items;
    items.splice(index, 1);              // 删除购物车列表里这个商品
    this.setData({
      items: items
    });
    if (!items.length) {                  // 如果购物车为空
      Notify({
        text: '全部删除',
        duration: 1000,
        selector: '#custom-selector',
        backgroundColor: '#fc464a'
      });
      this.setData({
        hasList: true,              // 修改标识为false，显示购物车为空页面
        bottomBar: false          //底部导航隐藏
      });
    } else {                              // 如果不为空
      this.getTotalPrice();           // 重新计算总价格
      Notify({
        text: '删除一个',
        duration: 1000,
        selector: '#custom-selector',
        backgroundColor: '#fc464a'
      });
    }
  },
  // 购买成功
  onClickButton() {
    Toast.success('购买成功');
  },
})
