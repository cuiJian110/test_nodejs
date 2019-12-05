/*
 * @Author: your name
 * @Date: 2019-12-05 17:37:00
 * @LastEditTime: 2019-12-05 17:47:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\test_03_mysql.js
 */
const mysql = require("mysql");
const collection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "herolist"
})
collection.connect();
collection.query("SELECT * from hero_list",(err,results,fields) => {
    console.log(results);
})