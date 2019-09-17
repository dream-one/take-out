<template>
<div>
  <Head>
    <van-icon @click="al" name="arrow-left" size="25" slot="screen" color="#fff" />
  </Head>

  <body class="align">
    <div class="grid align__item">
      <div class="register">
        <!-- 短信登录选项卡 -->
        <van-tabs :border="false" v-model="activeName" color="#02a774" type="line" animated>
          <van-tab name="phone" title="短信登录">
            <h2>log in</h2>
            <form @submit.prevent="login" action method="post" class="form">
              <div class="form__field">
                <input class="phoneinput" type="text" placeholder="手机号码" v-model="phone" />
                <van-button
                  round
                  @click.prevent="btn2(),disabled=true"
                  :disabled="!btnState"
                  class="yan"
                  size="small"
                  plain
                  type="primary"
                >{{btn1}}</van-button>
              </div>

              <div class="form__field">
                <input type="text" placeholder="验证码" v-model="code" />
              </div>

              <div class="form__field">
                <input type="submit" value="登录" />
              </div>
            </form>
          </van-tab>

          <!-- 密码登录选项卡 -->
          <van-tab name="pwd" title="密码登录">
            <h2>log in</h2>
            <form @submit.prevent="login" action method="post" class="form">
              <div class="form__field">
                <input type="text" placeholder="手机/邮箱/用户名" v-model="name" />
              </div>

              <div class="form__field">
                <input type="password" v-model="pwd" placeholder="密码" />
              </div>

              <div class="form__field">
                <div class="box">
                  <input maxlength="4" v-model="captcha" type="text" placeholder="验证码" />
                  <img @click="imgURL" height="42px" :src="imgurl" alt />
                </div>
              </div>

              <div class="form__field">
                <input type="submit" value="登录" />
              </div>
            </form>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="prompt">
      <span class="me" @click="$router.replace('/me')">关于我</span>
    </div>
  </body>
</div>
</template>

<script>
import Head from '../HeadTop/HeadTop'
import { Dialog, Toast } from 'vant'
import { setTimeout, clearInterval } from 'timers'
import { apiSendCode, apiLogin, apiPhoneLogin } from '../../request/api'
export default {
  data() {
    return {
      activeName: 'phone',
      time: 0, //倒计时
      flag: true, //判断获取验证码可不可以用
      phone: '', //手机号
      code: '', //短信验证码
      name: '', //用户名
      pwd: '', //密码
      captcha: '', //图形验证码
      imgurl: 'http://localhost:4000/captcha' //验证码图片地址
    }
  },
  components: {
    Head
  },
  computed: {
    btnState() {
      //手机号格式检测
      return /^1[0-9]{10}$/.test(this.phone) && this.flag
    },
    btn1() {
      if (this.time == 0) {
        return '获取验证码'
      } else {
        return '已发送' + '(' + this.time + ')' + 's'
      }
    }
  },
  methods: {
    al() {
      this.$router.go(-1)
    },
    btn2() {
      const T = this
      if (this.time == 0) {
        //如果等于0 启动定时器 然后发ajax
        this.flag = false
        this.time = 30

        T.inter = setInterval(function() {
          T.time--
          if (T.time == 0) {
            window.clearInterval(T.inter)
            T.flag = true
          }
        }, 1000)

        //发送验证码
        apiSendCode({ phone: this.phone })
          .then(() => {
            window.clearInterval(T.inter) //关闭定时器
            T.time = 0 //时间调为0
            T.flag = true //按钮变得可以用
          })
          .catch(function() {
            T.time = 0
            Toast('获取验证码失败')
            window.clearInterval(T.inter)
            T.flag = true
          })
      }
    },
    Dig(msg) {
      Dialog.alert({
        title: '提示',
        message: msg
      })
    },
    login() {
      //前台表单验证
      if (this.activeName == 'phone') {
        //说明在phone选项卡中
        let { phone, code } = this
        if (!this.btnState) {
          this.Dig('请输入正确的手机号码')
          return
        } else if (!/^\d{6}$/.test(this.code)) {
          this.Dig('请输入六位验证码')
          return
        } else {
          apiPhoneLogin({ phone: this.phone, code: this.code })
            .then(res => {
              console.log(res)
              if (res.code === 1) {
                Toast(res.msg)
                return
              }
              this.$store.commit('re_userInfo', {
                id: res.data._id,
                phone: res.data.phone
              })
              this.imgURL()
              this.$router.replace('/profile#/profile')
            })
            .catch(err => {
              Toast('登录失败 ' + err)
            })
        }
      } else {
        //在pwd选项卡中
        let { name, pwd, captcha } = this
        if (!name) {
          this.Dig('请输入用户名')
          return
        } else if (!pwd) {
          this.Dig('请输入密码')
          return
        } else if (!captcha) {
          this.Dig('请输入图形验证码')
          return
        } else {
          apiLogin({ name, pwd, captcha })
            .then(res => {
              //验证码错误
              if (res.code === 1) {
                Toast(res.msg)
                this.captcha = ''
                this.imgURL()
                return
              }
              this.$store.commit('re_userInfo', {
                id: res.data._id,
                name: res.data.name
              })
              this.$router.replace('/profile#/profile')
            })
            .catch(err => {
              Toast('登录请求失败')
            })
        }
      }
    },
    imgURL() {
      //图片验证码
      return (this.imgurl = 'http://localhost:4000/captcha?' + Date.now())
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
}
.me{
  margin: 28vw
}
img:nth-child(2) {
  top: -3%;
  position: absolute;
  left: 53.6874%;
}
$base-bgcolor: #fff;
$base-color: #02a774;
$base-font-weight: 400;
$base-font-size: 1rem;
$base-line-height: 1.5;
$base-font-family: Helvetica Neue;
$base-font-family-fallback: sans-serif;

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  background-color: $base-bgcolor;
  color: $base-color;
  font: $base-font-weight #{$base-font-size}/#{$base-line-height}
      $base-font-family,
    $base-font-family-fallback;
  margin: 0;
  min-height: 100%;
}

.align {
  align-items: center;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  &__item {
    &--start {
      align-self: flex-start;
    }

    &--end {
      align-self: flex-end;
    }
  }
}

.site {
  &__main {
  }

  &__logo {
    margin-bottom: 2rem;
  }
}

$input-placeholder-color: #7e8ba3;

input {
  border: 0;
  font: inherit;

  &::placeholder {
    color: $input-placeholder-color;
  }
}

.form {
  &__field {
    margin-bottom: 1rem;
  }

  input {
    outline: 0;
    padding: 0.5rem 1rem;

    &[type='number'],
    &[type='password'],
    &[type='text'] {
      width: 85%;
    }
  }
}

$grid-max-width: 26rem;
$grid-width: 100%;

.grid {
  margin: 0 auto;
  max-width: $grid-max-width;
  width: $grid-width;
}

h2 {
  font-size: 2.75rem;
  font-weight: 100;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

svg {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

$link-color: #7e8ba3;

a {
  color: $link-color;
}

.register {
  box-shadow: 0 0 250px #000;
  text-align: center;
  height: 85vh;

  overflow: hidden;
  input {
    border: 1px solid #242c37;
    border-radius: 999px;
    background-color: transparent;
    text-align: left;

    &[type='number'],
    &[type='password'],
    &[type='text'] {
      background-repeat: no-repeat;
      background-size: 1.5rem;
      background-position: 1rem 50%;
      padding-left: 12%;
      padding-right: 30%;
    }

    &[type='number'] {
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#242c37"><path d="M256.017 273.436l-205.17-170.029h410.904l-205.734 170.029zm-.034 55.462l-205.983-170.654v250.349h412v-249.94l-206.017 170.245z"/></svg>');
    }

    &[type='password'],
    &[type='text'] {
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#242c37"><path d="M195.334 223.333h-50v-62.666c0-61.022 49.645-110.667 110.666-110.667 61.022 0 110.667 49.645 110.667 110.667v62.666h-50v-62.666c0-33.452-27.215-60.667-60.667-60.667-33.451 0-60.666 27.215-60.666 60.667v62.666zm208.666 30v208.667h-296v-208.667h296zm-121 87.667c0-14.912-12.088-27-27-27s-27 12.088-27 27c0 7.811 3.317 14.844 8.619 19.773 4.385 4.075 6.881 9.8 6.881 15.785v22.942h23v-22.941c0-5.989 2.494-11.708 6.881-15.785 5.302-4.93 8.619-11.963 8.619-19.774z"/></svg>');
    }

    &[type='submit'] {
      // background-image: linear-gradient(160deg, #8ceabb 0%);
      background-color: #2cb98e;
      color: #fff;
      margin-bottom: 6rem;
      width: 85%;
      text-align: center;
    }
  }
}
// .van-tab__pane-wrapper:nth-child(1)
//   > .van-tab__pane:nth-child(1)
//   > .form:nth-child(2)
//   > .form__field:nth-child(2)
//   > input:nth-child(1) {
//   width: 320px;
// }

// .van-tab__pane-wrapper:nth-child(1)
//   > .van-tab__pane:nth-child(1)
//   > .form:nth-child(2)
//   > .form__field:nth-child(1)
//   > input:nth-child(1) {
//   width: 320px;
// }

//移除input框的小箭头
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

// .van-tab__pane-wrapper:nth-child(1)
//   > .van-tab__pane:nth-child(1)
//   > .form:nth-child(2)
//   > .form__field:nth-child(3)
//   > input:nth-child(1) {
//   width: 320px;
// }

.form__field {
  position: relative;
}
.form__field .yan {
  position: absolute;
  left: 50px;
  z-index: 5;

  background-repeat: no-repeat;

  background-position: 0px 0px;
  width: 26%;
  height: 32px;
  left: 64%;
  top: 5px;
  // width: 20px;

  // height: 20px; /*图片显示的高*/
}

.prompt {
  position: absolute;
  margin: 45% 15%;
  color: #7e8ba3
}
</style>

