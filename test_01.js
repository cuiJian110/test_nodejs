/*
 * @Author: your name
 * @Date: 2019-12-04 17:27:59
 * @LastEditTime: 2019-12-05 11:10:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\test_01.js
 */
// console.log("jjj");
const http = require("http");
http.createServer((request , response) => {
    response.writeHead(200, {
        "Content-type": "text/plain; charset,utf-8"
    })
    response.end("hello 张");
}).listen(3000, () => console.log("666"));
