import color from './color'

export default {
  defaultColor: color.defaultColor,
  activeColor: color.mainColor,
  menu: [
    {
      text: '发现',
      route: 'find',
      defaultIcon: 'https://m.360buyimg.com/mobilecms/jfs/t15076/226/2372445198/4768/4b9c36de/5aa10ce2N848e2dbd.png',
      activeIcon: 'https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png'
    }, {
      text: '分类',
      route: 'type',
      defaultIcon: 'https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png',
      activeIcon: 'https://m.360buyimg.com/mobilecms/jfs/t17578/307/690695366/3731/8695ed50/5aa10cdbNf3977e9f.png'
    }, {
      text: '首页',
      route: 'home',
      defaultIcon: 'https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png',
      activeIcon: 'https://m.360buyimg.com/mobilecms/jfs/t15682/206/2347158824/4156/c325b155/5aa10ce2N914335bf.png'
    }, {
      text: '购物车',
      route: 'card',
      defaultIcon: 'https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png',
      activeIcon: 'https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png'
    }, {
      text: '用户中心',
      route: 'user',
      defaultIcon: 'https://m.360buyimg.com/mobilecms/jfs/t17782/11/2358895717/4684/ad19de7f/5af43af1N04ef5a16.png',
      activeIcon: 'https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png'
    }
  ]
}
