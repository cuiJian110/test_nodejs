/*
 * @Author: your name
 * @Date: 2019-12-05 14:37:05
 * @LastEditTime: 2019-12-05 16:28:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\test_02express.js
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const routers = require("./routers_02");
const app = express();
app.use(cors({
    origin:['http://localhost:8080'],  //指定接收的地址
    methods:['GET','POST'],  //指定接收的请求类型
    alloweHeaders:['Content-Type','Authorization']  //指定header
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routers);
app.listen(3000,() => {
    console.log("3000 port running...");
})
