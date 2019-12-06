/*
 * @Author: your name
 * @Date: 2019-12-06 09:00:27
 * @LastEditTime: 2019-12-06 09:33:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\db\gz.js
 */
const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    // 数据库名字是连接下面的
    database: "herolist"
})
module.exports = conn;