<template>
  <div class="msite_shop_list">
    <div class="shop_header">
      <van-icon name="wap-nav"></van-icon>
      <span class="shop_header_title">附近商家</span>
    </div>
    <div class="shop_container">
      <ul class="shop_list">
        <li class="shop_li border-1px" v-for="(item,index) in shoplists" :key="index">
          <a>
            <div class="shop_left">
              <img class="shop_img" :src="BaseUrl+item.image_path" />
            </div>
            <div class="shop_right">
              <section class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{item.name}}</h4>
                <ul class="shop_detail_ul">
                  <li class="supports">{{ item.activities[0].icon_name }}</li>
                  <li class="supports">{{ item.activities[0].bao }}</li>
                  <li class="supports">{{ item.activities[0].zhun }}</li>
                </ul>
              </section>
              <section class="shop_rating_order">
                <section class="shop_rating_order_left">
                  <Star :size="24" :ratingcount="item.rating"></Star>
                  <!-- <div class="star star-24"> -->
                  <!-- <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                  </div>-->
                  <div class="rating_section">{{item.rating}}</div>
                  <div class="order_section">月售{{item.recent_order_num}}单</div>
                </section>
                <section class="shop_rating_order_right">
                  <span class="delivery_style delivery_right">{{item.delivery_mode.text}}</span>
                </section>
              </section>
              <section class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥20起送</span>
                  <span class="segmentation">/</span>
                  <span>{{item.piecewise_agent_fee.tips}}</span>
                </p>
              </section>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import { apiGetShopList } from "../../request/api";
import Star from "./stars/star";
export default {
  data() {
    return {
      shoplists: [],
      BaseUrl: "http://localhost:4000"
    };
  },
  mounted: function() {
    this.$store.dispatch("receive_shops");
    this.getShopList();
  },
  methods: {
    getShopList() {
      apiGetShopList({ latitude: "40.10038", longitude: "116.36867" }).then(
        res => {
          this.shoplists = res.data;
        

          console.log(this.shoplists);
        }
      );
    }
  },
  computed: {
    // ...mapState(["shops"]),
    // ...mapActions(["receive_shops"])
  },
  components: {
    Star
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
@import '../../common/stylus/mixins.styl';

.msite_shop_list {
  top-border-1px(#e4e4e4);
  margin-top: 10px;
  background: #fff;

  .shop_header {
    padding: 10px 10px 0 10px;

    .shop_icon {
      margin-left: 5px;
      color: #999;
    }

    .shop_header_title {
      color: #999;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .shop_container {
    margin-bottom: 50px;

    .shop_list {
      .shop_li {
        bottom-border-1px(#f1f1f1);
        width: 100%;

        >a {
          clearFix();
          display: block;
          box-sizing: border-box;
          padding: 15px 8px;
          width: 100%;

          .shop_left {
            float: left;
            box-sizing: border-box;
            width: 23%;
            height: 75px;
            padding-right: 10px;

            .shop_img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }

          .shop_right {
            float: right;
            width: 77%;
            height: 11vh;

            .shop_detail_header {
              clearFix();
              width: 100%;

              .shop_title {
                text_ellipsis();
                float: left;
                width: 200px;
                color: #333;
                font-size: 16px;
                line-height: 16px;
                font-weight: 700;

                &::before {
                  content: ' 品牌';
                  display: inline-block;
                  font-size: 11px;
                  line-height: 11px;
                  color: #333;
                  background-color: #ffd930;
                  padding: 2px 2px;
                  border-radius: 2px;
                  margin-right: 5px;
                }
              }

              .shop_detail_ul {
                float: right;
                margin-top: 3px;

                .supports {
                  float: left;
                  font-size: 10px;
                  color: #999;
                  border: 1px solid #f1f1f1;
                  padding: 0 2px;
                  border-radius: 2px;
                }
              }
            }

            .shop_rating_order {
              clearFix();
              width: 100%;
              margin-top: 18px;
              margin-bottom: 8px;

              .shop_rating_order_left {
                float: left;
                color: #ff9a0d;

                .rating_section {
                  float: left;
                  font-size: 10px;
                  color: #ff6000;
                  margin-left: 4px;
                }

                .order_section {
                  float: left;
                  font-size: 10px;
                  color: #666;
                  transform: scale(0.8);
                }
              }

              .shop_rating_order_right {
                float: right;
                font-size: 0;

                .delivery_style {
                  transform-origin: 35px 0;
                  transform: scale(0.7);
                  display: inline-block;
                  font-size: 12px;
                  padding: 1px;
                  border-radius: 2px;
                }

                .delivery_left {
                  color: #fff;
                  margin-right: -10px;
                  background-color: #02a774;
                  border: 1px solid #02a774;
                }

                .delivery_right {
                  color: #02a774;
                  border: 1px solid #02a774;
                }
              }

              .shop_distance {
                clearFix();
                width: 100%;
                font-size: 12px;

                .shop_delivery_msg {
                  float: left;
                  transform-origin: 0;
                  transform: scale(0.9);
                  width: 100px;
                  color: #666;
                }

                .segmentation {
                  color: #ccc;
                }
              }
            }
          }
        }
      }
    }
  }
}

.shop_right {
  position: relative;
  top: -21px;
}

.shop_delivery_msg {
  width: 881px;
  position: relative;
  top: -38.5313px;
}

span:nth-child(3) {
  width: 54px;
  height: 22px;
  font-size: 12px;
}

.shop_delivery_msg:nth-child(1) > span:nth-child(1) {
  font-size: 12px;
}

.supports {
  position: relative;
  top: 15px;
}

.shop_rating_order {
  position: relative;
  top: -15.5313px;
}

.delivery_style.delivery_right {
  position: relative;
  top: -14px;
  height: 21px;
  width: 53px;
  font-size: 13px;
}
</style>