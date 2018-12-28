Page({
  data: {
    active: 0,
    detail:[
          {
            text: '衣服',
            id: 1,
            pic: 'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg'
          },
          {
            text: '鞋子',
            id: 2,
            pic: 'https://img.alicdn.com/bao/uploaded/i1/TB1bZfLQpXXXXcxXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg'
          }, {
            text: '裤子',
            id: 3,
            pic: 'https://img.alicdn.com/bao/uploaded/i4/1766047907/TB1.Gl5glcHL1JjSZJiXXcKcpXa_!!0-item_pic.jpg_430x430q90.jpg'
          },
          {
            text: '裙子',
            id: 4,
            pic: 'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
            name: '4秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭'
      }
    ]
  },
  onChange(event) {
    wx.showToast({
      icon: 'none',
      title: `切换至第${event.detail}项`
    });
  }
});