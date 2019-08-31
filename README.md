
# take-out
外卖 Web App（SPA）



## 一些特性
* Vue版本：2.x
* 基于Vue cli 3脚手架
* 基于Vant ui 搭建单页面应用 全部引入


# 底部导航栏
  1. 在main.js引入vant ui。在Footer.vue中引入van-tabbar标签
  2. 在阿里矢量库中下载项目
  3. 将下载好的文件放入 'src/assets/css'目录中
  4. 在main.js中导入iconfont.css
  5. 引入Icon `import {Icon} from 'vant'`
  6. 对照类名使用 

# 顶部导航栏组件
	1. 单独建立HeadTop.vue组件
	2. 使用 van-nav-bar标签  
	3. 由于每个路由都不一样，需使用插槽 用法参照vant及vue.js文档。这里有一个坑在van-nav-bar组件中定义的slot标签需要用div包裹起来,同时给div加一个class=left/right

# 轮播图
	1.使用van-swipe标签 导入图像
	2.使用flex布局。[Spring-data-jpa flex详细用法阅读此链接](https://zhuanlan.zhihu.com/p/25303493)

# 我的（Profile.vue）
	1. 使用van-cell标签