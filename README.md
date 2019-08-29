
# take-out
外卖 Web App（SPA）

## 底部导航栏
 使用了vant组件库
  1. 在阿里矢量库中下载项目
  2. 将下载好的文件放入 'src/assets/css'中
  3. 在main.js中导入iconfont.css
  4. 引入Icon `import {Icon} from 'vant'`
  5. 对照类名使用  `<van-tabbar-item to='/mesite' icon="shop"  >
    <span >首页</span>
    <template slot="icon"  slot-scope="props">
      <van-icon size="20" class="iconfont" class-prefix='icon' name='waimaifuwu-shiyongfangbian' />
    </template>
  </van-tabbar-item>`

