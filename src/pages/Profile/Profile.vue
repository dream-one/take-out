<template>
  <section class="profile">
    <HeaderTop :title="title"></HeaderTop>
    <section class="profile-number">
      <van-cell url="#/login" link-type="navigateTo" class="profile-link">
        <div class="profile_image">
          <img src="./img/touxiang.jpg" />
        </div>
        <div class="user-info">
          <p class="user-info-top">{{showuser}}</p>
          <p>
            <span class="user-icon">
              <van-icon name="phone-o"></van-icon>
            </span>
            <span class="icon-mobile-number">{{userInfo.phone ? userInfo.phone : '未绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <van-icon name="arrow" size="25" color="#fff" />
        </span>
      </van-cell>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>0.00</span>元
          </span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>0</span>个
          </span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>0</span>分
          </span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>

    <section>
      <div class="contain">
        <van-cell is-link title="我的卡包" link-type="navigateTo">
          <van-icon slot="icon" color="green" size="18" name="card" class="custom-icon" />
        </van-cell>

        <van-cell is-link title="积分商城  " link-type="navigateTo">
          <van-icon slot="icon" name="shop-collect" size="18" color="orange" class="custom-icon" />
        </van-cell>

        <van-cell is-link title="奖励勋章" link-type="navigateTo">
          <van-icon slot="icon" color="red" size="18" name="award" class="custom-icon" />
        </van-cell>

        <div class="fuwu">
          <van-cell is-link title="服务中心" :border="true" link-type="navigateTo">
            <van-icon slot="icon" color="red" size="18" name="phone" class="custom-icon" />
          </van-cell>
        </div>
      </div>
    </section>

    <section>
      <van-button
        style="margin-top:10px;color:red"
        @click="logout"
        plain
        size="large"
        v-if="userInfo.id"
        type="default"
      >退出登录</van-button>
    </section>
  </section>
</template>

<script>
import HeaderTop from '../HeadTop/HeadTop'
import { mapState } from 'vuex'
import axios from 'axios'
import { Toast } from 'vant'

export default {
  data() {
    return {
      title: '我的'
    }
  },

  components: {
    HeaderTop
  },
  computed: {
    ...mapState(['userInfo']),
    showuser() {
      if (this.userInfo.phone) {
        return '用户' + Date.now()
      } else if (this.userInfo.name) {
        return this.userInfo.name
      } else {
        return '登录/注册'
      }
    }
  },
  methods: {
    logout() {
      this.axios.get('/logout').then(res => {
        this.$router.replace('/profile')
        console.log('登出成功')
        this.$store.commit('dele_userfo')
        Toast('退出成功')
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
@import '../../common/stylus/mixins.styl';

.fuwu {
  margin-top: 10px;
}

.header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
  }

  .icon-sousuo {
    font-size: 25px;
    color: #fff;
  }

  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;

    .header_title_text {
      font-size: 20px;
      color: #fff;
      display: block;
    }
  }

  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  .header_login_text {
    color: #fff;
  }
}

.profile { // 我的
  width: 100%;
  height: 100vh;
  background-color: #e6d8d8;

  .profile-number {
    // margin-top: 45.5px;
    .profile-link {
      clearFix();
      position: relative;
      display: block;
      background: #02a774;
      padding: 20px 10px;

      .profile_image {
        float: left;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        top: 10px;
        vertical-align: top;

        img {
          weight: 100%;
          height: 100%;
        }

        .icon-geren {
          background: #e4e4e4;
          font-size: 62px;
        }
      }

      .user-info {
        float: left;
        margin-top: 8px;
        margin-left: 15px;

        p {
          font-weight: 700;
          font-size: 18px;
          color: #fff;

          &.user-info-top {
            padding-bottom: 8px;
          }

          .user-icon {
            display: inline-block;
            margin-left: -15px;
            margin-right: 5px;
            width: 20px;
            height: 20px;

            .icon-shouji {
              font-size: 30px;
              vertical-align: text-top;
              color: #e4e4e4;
            }
          }

          .icon-mobile-number {
            font-size: 14px;
            color: #fff;
          }
        }
      }

      .arrow {
        width: 12px;
        height: 12px;
        position: absolute;
        right: 15px;
        top: 40%;

        .icon-jiantou1 {
          color: #fff;
          font-size: 5px;
        }
      }
    }
  }

  .profile_info_data {
    bottom-border-1px(#e4e4e4);
    width: 100%;
    background: #fff;
    overflow: hidden;

    .info_data_list {
      clearFix();

      .info_data_link {
        float: left;
        width: 33%;
        text-align: center;
        border-right: 1px solid #f1f1f1;

        .info_data_top {
          display: block;
          width: 100%;
          font-size: 14px;
          color: #333;
          padding: 15px 5px 10px;

          span {
            display: inline-block;
            font-size: 30px;
            color: #f90;
            font-weight: 700;
            line-height: 30px;
          }
        }

        .info_data_bottom {
          display: inline-block;
          font-size: 14px;
          color: #666;
          font-weight: 400;
          padding-bottom: 10px;
        }
      }

      .info_data_link:nth-of-type(2) {
        .info_data_top {
          span {
            color: #ff5f3e;
          }
        }
      }

      .info_data_link:nth-of-type(3) {
        border: 0;

        .info_data_top {
          span {
            color: #6ac20b;
          }
        }
      }
    }
  }

  .profile_my_order {
    margin-top: 10px;
    background: #fff;

    .my_order {
      display: flex;
      align-items: center;

      >span {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;

        >.iconfont {
          margin-left: -10px;
          font-size: 30px;
        }

        .icon-order-s {
          color: #02a774;
        }

        .icon-jifen {
          color: #ff5f3e;
        }

        .icon-vip {
          color: #f90;
        }

        .icon-fuwu {
          color: #02a774;
        }
      }

      .my_order_div {
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
        padding: 18px 10px 18px 0;
        font-size: 16px;
        color: #333;
        display: flex;
        justify-content: space-between;

        span {
          margin-left: 20px;
          display: block;
        }

        .my_order_icon {
          width: 10px;
          height: 10px;

          .icon-jiantou1 {
            color: #bbb;
            font-size: 10px;
          }
        }
      }
    }
  }
}

.van-icon {
  position: relative;
  top: 4.5px;
  left: -6px;
}

.contain {
  margin-top: 15px;
}
</style>