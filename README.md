# react-app-client

## 一个React模块化脚手架

```
    已集成以下插件：
      1、Bscroll 滚动插件
      2、ant-design-mobile 抽离出样式文件
      3、axios 抽离API环境配置
      4、less
    目标：
      基于react模块化探索
    目录说明：
    .
    ├── README.md
    ├── config
    │   ├── env.js
    │   ├── jest
    │   │   ├── cssTransform.js
    │   │   └── fileTransform.js
    │   ├── paths.js
    │   ├── polyfills.js
    │   ├── webpack.config.dev.js                 // 本地开发配置
    │   ├── webpack.config.prod.js                // 生产环境开发配置
    │   ├── webpack.config.test.js                // 测试环境开发配置
    │   └── webpackDevServer.config.js
    ├── package.json
    ├── path
    │   ├── dev.env.js                            // 本地开发环境配置     
    │   ├── prod.env.js                           // 生产开发环境配置 
    │   └── test.env.js                           // 测试开发环境配置 
    ├── public
    │   ├── favicon.ico
    │   ├── index.html                            // 入口文件 
    │   └── manifest.json
    ├── scripts                                   // 打包命令
    │   ├── build.js
    │   ├── start.js
    │   └── test.js
    └── src                                       // 开发文件夹
        ├── App.js
        ├── api
        │   ├── axios                             // 服务端通讯
        │   │   └── index.js
        │   └── phoneModel.js                     // 功能模块化API
        ├── assets                                // 资源文件
        │   ├── fonts
        │   │   └── icon.css
        │   ├── logo.png
        │   └── style
        │       └── common.css
        ├── components                            // 公共组件
        │   ├── common
        │   │   ├── footer.js
        │   │   ├── header.js
        │   │   ├── index.js
        │   │   └── navLink.js
        ├── config                                // app配置
        │   ├── brandlist.js
        │   ├── color.js
        │   ├── footer.js
        │   └── index.js
        ├── index.js
        ├── logo.svg
        ├── mock
        │   └── mock.js
        ├── router                               // 路由模块化
        │   └── router.js
        ├── utils                                // 工具文件
        │   └── apiPath.js
        └── views                                // 视图
            ├── card
            │   ├── card.js
            │   └── index.less
            ├── find
            │   └── find.js
            ├── home
            │   ├── compontent
            │   ├── index.js
            │   └── index.less
            ├── type
            │   ├── compontent
            │   ├── index.less
            │   └── type.js
            └── user
                └── user.js
```
