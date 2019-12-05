/*
 * @Author: your name
 * @Date: 2019-12-05 16:11:58
 * @LastEditTime: 2019-12-05 16:17:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\test_03_express.js
 */
const express = require("express");
const app = express();
app.get("/",(req , res) => {
    res.send("首页")
})
app.get("/home", (req , res) => {
    res.send("home页面")
})
app.get("/movie", (req , res) => {
    res.send("movie 列表页面")
})
app.get("/movie/:id", (req, res) => {
    const id = req.params.id;
    res.send("movie 详情页"+id);
})
app.listen(4000,() => console.log("4000 port running..."))