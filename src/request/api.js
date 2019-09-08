/* eslint-disable no-irregular-whitespace */
//统一管理接口
import { get, post } from "./htp"; //引入get与post

//根据经纬度获取位置,参数是经纬度字符串。如：('15.066,53.538')
export const apiAdress = p => get("/position/" + p);

//获取食物信息
export const apiGetFood = () => get("/index_category");

//根据经纬度获取商家列表
//p对象：{latitude:'123',longitude:'234'}
export const apiGetShopList = p => get("/shops", p);

//根据经纬度和关键字搜索商铺列表  p:{geohash:'123,456',ketword=test}
export const apiSearchShopList = p => get("/search_shops", p);

//获取一次性验证码
export const apiGetOnceCode = () => get("/captcha");

//用户名密码登陆
// |参数		|是否必选 |类型     |说明
// |name       |Y       |string   |用户名
// |pwd        |Y       |string   |密码
// |captcha    |Y       |string   |验证码
export const apiLogin = p => post("/login_pwd", p);

//手机验证码登录
//
// 	|参数		|是否必选 |类型     |说明
// 	|phone       |Y       |string   |手机号
//  |code        |Y       |string   |验证码
export const apiPhoneLogin = p => post("/login_sms", p);

// //发送短信验证码
// |参数     |是否必选 |类型     |说明
// |phone       |Y       |string   |手机号
//
export const apiSendCode = p => get("/sendcode", p);

//根据回话获取用户信息
export const apiUserinfo = () => get("/userinfo");

//用户登出
export const apiOut = () => get("/logout");

export const shopsinfo = () => get("/shop/info");
export const shopsgoods = () => get("/shop/goods");
export const shopsratings = () => get("/shop/ratings");
