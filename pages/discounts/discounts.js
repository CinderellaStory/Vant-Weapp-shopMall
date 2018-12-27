Page({
  data: {
    detail:[
      {
        // 导航名称
        text: '新品推荐',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
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
      {
        // 导航名称
        text: '广东',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '深圳',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: true
          },
          {
            text: '广州',
            id: 2
          }
        ]
      }
    ]
  },

  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },

  onClickItem({ detail = {} }) {
    this.setData({
      activeId: detail.id
    });
  }
});