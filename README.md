##  ##

## 一些特性
* Vue版本：2.x
* 基于Vue cli 3脚手架
* 基于Vant ui 搭建单页面应用 全部引入
* 前后端分离
* 开发模式：模块化、组件化、工程化


## 底部导航栏
  1. 在main.js引入vant ui。在Footer.vue中引入van-tabbar标签
  2. 在阿里矢量库中下载项目
  3. 将下载好的文件放入 'src/assets/css'目录中
  4. 在main.js中导入iconfont.css
  5. 引入Icon `import {Icon} from 'vant'`
  6. 对照类名使用 

## 顶部导航栏组件
1. 单独建立HeadTop.vue组件
2. 使用 van-nav-bar标签  
3. 由于每个路由都不一样，需使用插槽 用法参照vant及vue.js文档。
	* 注意：在van-nav-bar组件中定义的slot标签需要用div包裹起来,同时给div加一个`class=left/right`

## 轮播图
* 使用van-swipe标签导入图像  	 使用flex布局。[flex详细用法阅读此链接](https://zhuanlan.zhihu.com/p/25303493)

## 我的（Profile.vue）
1. 使用van-cell（单元格）标签
2. 复制粘贴，微调样式
3. 跳转登录，返回按钮

## 服务器
1. 启动mongodb服务器
2. 解压目录下的take-server文件夹并`npm start`
##
##测试后台服务器
1. 安装axios ` install axios`
2. 在main.js中引入 ``` import axios from 'axios'; ```
3. 这里有个坑，就是引入后要挂载到原型上才能使用 `Vue.prototype.axios = axios`
  * `this.axios.get('/position/40.10038,116.36867').then(res => {
        console.log(res) //测试代码`
#### 解决跨域 基于cli3脚手架
1. 在 package.json  同级目录新建一个 vue.config.js 文件，加入下面代码


    	module.exports = {//axios域代理，解决axios跨域问题
   			 baseUrl: '/',
   			 devServer: {
   			 proxy: {
				    '': {
				    target: 'http://localhost:4000',
				    changeOrigin: true,
				    ws: true,
				    pathRewrite: {	    
				          }
				        }
				       }
				      }
				    }

### 封装axios
  
