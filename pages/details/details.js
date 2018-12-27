//index.js
import Toast from '../vant/toast/toast';  //引入toast
var jsonData = require('../../api/d.js');

const app = getApp()
Page({
  data: {
    items:[],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    imgUrls: [
      'https://img.alicdn.com/imgextra/i1/263817957/O1CN0128eLxcOjVHP4T0h_!!263817957.jpg_760x760Q50s50.jpg_.webp',
      'https://img.alicdn.com/imgextra/i3/263817957/O1CN01uPtYFN28eLyv1Cgm4-263817957.jpg_760x760Q50s50.jpg_.webp',
      'https://img.alicdn.com/imgextra/i1/263817957/O1CN0128eLxaf3I1I0BjH_!!263817957.jpg_760x760Q50s50.jpg_.webp',
      'https://img.alicdn.com/imgextra/i2/263817957/O1CN0128eLxaf4A3Jux49_!!263817957.jpg_760x760Q50s50.jpg_.webp',
      'https://img.alicdn.com/imgextra/i2/263817957/O1CN0128eLxcQIcW8jPWZ_!!263817957.png_760x760Q50s50.jpg_.webp',
    ],
  },
  // 页面登陆事件
  onLoad(e) {
    // 看一下传过来的是什么
    console.log(e);
    // 获取传过来的id
    const id = e.id; // 这个是你的url里面拼的什么字段,就取什么字段
    // ...你的ajax请求

  },
  // 加入购物车提示
  addCart(){
    Toast.success('已加入购物车');
  },
  //购物车跳转
  onClickCart() {
    setTimeout(function () {
      wx.switchTab({
        url: '../cart/cart'
      })
    }, 1000)
  },
  // 收藏提示
  onClickCollect(){
    Toast.success('已收藏');
    console.log("我收藏了")
  },
  // 购买成功
  onClickBuy(){
    Toast.success('购买成功');
  }
})