/*
 * @Author: your name
 * @Date: 2019-12-05 16:23:43
 * @LastEditTime: 2019-12-05 16:41:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\routers_02.js
 */
const express = require("express");
const routers = express.Router();
const login = require("./interface/login");
const home = require("./interface/home");

routers.get("/getData/:id",home.getData);
routers.post("/testPost666",home.testPost);
routers.post("/login",login.handleLogin)

module.exports = routers;