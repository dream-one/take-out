##  ##
### 目前文档还未完成，只写了一个大致框架。详细部分及细节润色后续会补上，建议star住先
## 一些特性
* Vue版本：2.x
* 基于Vue cli 3脚手架
* 基于Vant ui 搭建单页面应用 全部引入
* 前后端分离
* 开发模式：模块化、组件化、工程化

## ##

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
### 测试后台服务器
1. 安装axios `install axios`
2. 在main.js中引入 `import axios from 'axios';`
3. 这里有个坑，就是引入后要挂载到原型上才能使用 `Vue.prototype.axios = axios`
  * `this.axios.get('/position/40.10038,116.36867').then(res => {
        console.log(res) //测试代码`
### 解决跨域 基于cli3脚手架
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
  
## Star组件
首先，在star.vue中，css定义的类名中有两个标识，一个是数字，一个是单词，比如：star36-on，其中36是星星的大小，这个我们通过组件传值的方式获得。还有一个是星星的不同，有全星，半星和灰星。分别是on,half和off。我们把这三个状态存入一个数组里。然后通过v-for遍历这个数组，就能渲染到星星的个数。但是每种星星的状态分别存多少个？这取决于评分多少
 1. 最多五个星
 2. 半星的个数为1或0
 3. 全星的个数为评分的取整
 4. 灰星的个数 = 5 - 半星个数-全星个数

 这个地方自己想的话确实比较难搞，但是一点拨就好了。将来面试可以拿这个点说一说


## Login.vue
   * 判断手机格式来决定是否禁用按钮
   按照老师的来，van-button有个属性叫disabled用来切换按钮是否禁用
   * 倒计时（这里有坑）
   1. 由于在定时器回调函数内部中,this是window！！所以一开始要把this保存起来！！
   2. 清除定时器必须使用 window.clearInterval()！！
   * 如果想在倒计时中也把按钮设置为禁用状态，需要额外定义一个flag 
   
## Shop.vue
