##  ##
### 持续更新中...
## 一些特性
* Vue版本：2.x
* 前后端分离
* 开发模式：模块化、组件化、工程化

## 说明
  开始之前需要了解的前置技术：
  * Git
  * mogodb数据库的安装以及启用

  这个项目基于我个人的理解，做了如下修改：
  * 使用了较新的Vue cli3脚手架搭建项目
  * 基于vant-ui组件库搭建页面
  * 简化了get/post请求封装，独立管理api
  * 优化接口数据
  * 简化了不必要的vuex模块的使用

  项目过程中，多查文档，善用谷歌。解决了一个BUG要记录下来，防止以后重复踩坑。
## ##

## 部分页面预览

![个人界面](https://github.com/dream-one/take-out/blob/master/public/%E6%88%AA%E5%9B%BE/pro.PNG?raw=true)
![食品选择](https://github.com/dream-one/take-out/blob/master/public/%E6%88%AA%E5%9B%BE/shop.PNG?raw=true)
![首页](https://github.com/dream-one/take-out/blob/master/public/%E6%88%AA%E5%9B%BE/%E6%8D%95%E8%8E%B7.PNG?raw=true)

## 技术选型
![](https://github.com/dream-one/take-out/blob/master/public/%E6%88%AA%E5%9B%BE/%E6%B5%81%E7%A8%8B%E5%9B%BE.PNG?raw=true)
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
2. 可以按自己的理解绘制样式
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
   van-button组件有个属性叫disabled用来切换按钮是否禁用，使用计算属性，如果输入的值不是1开头或者不满11位，获取验证码按钮处于禁用状态
   * 倒计时（这里有坑）
   1. 由于在定时器回调函数内部中,this是window！！所以一开始要把this保存起来！！
   2. 清除定时器必须使用 window.clearInterval()！！
   * 如果想在倒计时中也把按钮设置为禁用状态，需要额外定义一个flag 
   
## Shop.vue


###shopgoods.vue的编写
* better-scroll无法滑动:仔细阅读文档后发现，外层DIV需指定高度。
* 实现点击左侧某个标签，就给那个标签增加current类。
* 	1. ``` /*思路:每个li标签都有自己的Index下标，那么我们创建一个is属性，值是数字。每点击一个标签就把index值传递给is。只要li的index等于is，就添加current类。 */
	<li :class="{current:is==index}" @click="is=index"></li>
	
	2. 有个坑就是给li加点击事件失效，查阅文档发现是better-scroll搞得鬼。new Bscroll的时候添加一个配置项` new BScroll('.foods-wrapper',{click:``true}) 

* 关于左右两侧列表的关联思路：需要两个数据：一个是滑动到哪了，一个是滑动到哪就要更改is的数值了
  1.  滑动到哪,better-scroll有钩子函数，我们可以监听，并保存到data中的scrollY：

		 	const fbs = new BScroll('.foods-wrapper', { click: true, probeType: 2 })
		 	fbs.on('scroll', ({ y }) => {
		 		this.scrollY = Math.abs(y)
		 	}),
		
  2.  滑动到哪个位置就要更改is，是初始化数据时即确定。将每个li标签的top值存入数组

		 	 let texttops = []
    		 let top = 0
    		 texttops.push(top)
    		 //1.获取节点
    		 const lis = this.$refs.foodTop.getElementsByClassName('food-list-hook')
    		 //2.遍历节点
    		 Array.prototype.slice.apply(lis).forEach(li => {
    		   top += li.clientHeight
    		   texttops.push(top)
    		 })
    		 //3.更新数据
    		 this.tops = texttops
      这样我们就获得了一个数组`tops=[0, 780, 1103, 1601, 1726, 1950, 2194, 2517, 3038, 3758]`但是是伪数组
	3. 定义watch，监听scrollY属性。使用findIndex方法，判断scrolly数值在tops数组哪个区间，将下标传给is
	4. 使用scrollTo方法，再点击时滚动 ` @click="is = index,fbs.scrollTo(0,-tops[index],300)" `
  
* 评价组件
  		
 解决bug:
  1. 当切换全部、满意与不满意按钮时，列表滚动错误，经过排查发现要在数据更新后重新计算滚动 `this.bs.refresh()`
  2. 还是不行，需要在this.$nextTick回调函数中重新计算，因为这时dom才更新完成


## 路由组件懒加载

  解决bug:在router.js文件中修改如下代码，结果发现组件无法渲染。不要加大括号

 		const Msite = ()=> import('../pages/Msite/Msite.vue')

## 图片懒加载
vant有专门的组件
## Search.vue

## 打包优化
  在开发环境下设置的跨域代理，生产环境是不认的。