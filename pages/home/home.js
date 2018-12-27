//home.js
var jsonData = require('../../api/banner.js');
var classifyData = require('../../api/classify.js');
var groupData = require('../../api/group.js');

//获取应用实例
const app = getApp()

Page({
  // event.detail 的值为当前选中项的索引
  onChange(event) {
    console.log(event.detail);
  },
  data: {
    active: 0,
    value: '请输入商品或店铺名称',
    more: "更多"
  },
  onLoad: function () {
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      bannerList: jsonData.dataList[0].imgUrls,
      classifyList: classifyData.dataList,
      groupList: groupData.dataList
    });
  }
})