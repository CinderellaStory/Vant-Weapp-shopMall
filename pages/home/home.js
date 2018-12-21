//home.js
//获取应用实例
const app = getApp()

Page({
	data: {
		value: '请输入商品或店铺名称',
		more: "更多",
		circular: true,
		indicatorDots: true,
		autoplay: true,
		interval: 3000,
		duration: 800,
		imgUrls: [
			'http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png',
			'http://www.ysc66.com/Public/Home/images/infomation/banner.png',
			'http://www.ysc66.com/Uploads//banner/2017-11-10/5a054c1c9376b_1920x500.png',
			'https://cinderellastory.github.io/ShopMall/images/2.jpg'
		],
		classify: [{
			imgs: 'https://cinderellastory.github.io/ShopMall/images/home/icon_pic01.png',
			text: '服饰箱包',
		}, {
			imgs: 'https://cinderellastory.github.io/ShopMall/images/home/icon_pic02.png',
			text: '油品鞋类',
		}, {
			imgs: 'https://cinderellastory.github.io/ShopMall/images/home/icon_pic03.png',
			text: '数码家电',
		}, {
			imgs: 'https://cinderellastory.github.io/ShopMall/images/home/icon_pic04.png',
			text: '美妆洗护',
		}, {
			imgs: 'https://cinderellastory.github.io/ShopMall/images/home/icon_pic05.png',
			text: '珠宝饰品',
		}, {
			imgs: 'https://cinderellastory.github.io/ShopMall/images/home/icon_pic06.png',
			text: '运动户外',
		}, {
			imgs: 'https://cinderellastory.github.io/ShopMall/images/home/icon_pic07.png',
			text: '百货餐厨',
		}, {
			imgs: 'https://cinderellastory.github.io/ShopMall/images/home/icon_pic08.png',
			text: '特产美食',
		}],
		lists: [{
				title: '推荐商品',
				tj: [{
					pic: 'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
					name: '秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
					price: 89.00
				}, {
					pic: 'https://img.alicdn.com/bao/uploaded/i1/TB1bZfLQpXXXXcxXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
					name: '2017春装新款韩版潮宽松学生百搭T恤女衣服露肩长袖打底衫女夏季',
					price: 449.99,
				}, {
					pic: 'https://img.alicdn.com/bao/uploaded/i4/1766047907/TB1.Gl5glcHL1JjSZJiXXcKcpXa_!!0-item_pic.jpg_430x430q90.jpg',
					name: '秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
					price: 99.98
				}, {
					pic: 'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
					name: '秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
					price: 199.99
				}]
		},{
				title: '最新商品',
				tj: [{
					pic: 'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
					name: '秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
					price: 89.00
				}, {
					pic: 'https://img.alicdn.com/bao/uploaded/i1/TB1bZfLQpXXXXcxXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
					name: '2017春装新款韩版潮宽松学生百搭T恤女衣服露肩长袖打底衫女夏季',
					price: 449.99,
				}, {
					pic: 'https://img.alicdn.com/bao/uploaded/i4/1766047907/TB1.Gl5glcHL1JjSZJiXXcKcpXa_!!0-item_pic.jpg_430x430q90.jpg',
					name: '秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
					price: 99.98
				}, {
					pic: 'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
					name: '秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
					price: 199.99
				}]
		}]
}
})
