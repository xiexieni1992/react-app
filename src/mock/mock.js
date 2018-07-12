import Mock from 'mockjs'

// 分页查询以旧换新商品
Mock.mock('/api/v2/basedata/brands', /post|get/i, {
  code: 'SUCCESS',
  msg: '成功',
  data: {
    total: '10',
    pages: 1,
    records: [{
      id: 1,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 2,
      title: '家用电器',
      marketPrice: '3267',
      averageExchangePrice: '3434',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/2a11ad54dd354a3c940746aa6a14f734.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 3,
      title: '电脑办公',
      marketPrice: '3267',
      averageExchangePrice: '1212',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/76eee7748d7a460eb33622900e4df6d2.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 4,
      title: '计生情趣',
      marketPrice: '3267',
      averageExchangePrice: '3223',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/6aa44b129c174ecd9d040bfee917d1dc.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 5,
      title: '美妆护肤',
      marketPrice: '3267',
      averageExchangePrice: '454',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/2839644c04a844b19c3a74ab013bdd40.jpg',
      tags: ['金色', '全网通', '64G', '95新', '配件齐全', '七天包退']
    }, {
      id: 6,
      title: '个护清洁',
      marketPrice: '3267',
      averageExchangePrice: '565',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/b252c4a584e54a7ab5d2aeaa4ed39989.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 7,
      title: '个护清洁',
      marketPrice: '3267',
      averageExchangePrice: '4543',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 8,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 9,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 10,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 111,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 12,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 13,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 14,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 15,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 16,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 17,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    }, {
      id: 18,
      title: '手机数码',
      marketPrice: '3267',
      averageExchangePrice: '2222',
      imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/23b5e490afa34721af3b4e32758e6463.jpg',
      tags: ['金色', '全网通']
    },]
  }
})

// 查询单个以旧换新商品
Mock.mock('/api/exchange/goods', /post|get/i, {
  code: 'SUCCESS',
  msg: '成功',
  data: {
    id: 1,
    title: '个护清洁',
    marketPrice: '3267',
    averageExchangePrice: '2222',
    imgUrl: 'https://test.r.youjiji.net/resourcev2/2018-04-16/b252c4a584e54a7ab5d2aeaa4ed39989.jpg',
    tags: ['金色', '全网通']
  }
})

// 下单
Mock.mock('/api/exchange/order', /post|get/i, {
  code: 'SUCCESS',
  msg: '成功',
  data: '989712223129677826'
})

// 查询以旧换新订单支付结果
Mock.mock('/api/exchange/order/payresult', /post|get/i, {
  code: 'SUCCESS',
  msg: '成功',
  data: {
    result: true
  }
})
