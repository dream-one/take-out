//模拟服务器
import Mock from "mockjs"; //引入包
import data from "./data.json";
Mock.mock("/shop/info", { code: 0, data: data.info }); //如果请求这个链接，返回data.info
Mock.mock("/shop/ratings", { code: 0, data: data.ratings });
Mock.mock("/shop/goods", { code: 0, data: data.goods });
