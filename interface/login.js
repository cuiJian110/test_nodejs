/*
 * @Author: your name
 * @Date: 2019-12-05 16:33:11
 * @LastEditTime: 2019-12-05 16:37:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\interface\login.js
 */
const loginModules = {
    handleLogin(req , res) {
        const {userName, pwd} = req.body;
        let obj = {};
        if(userName === "admin" && pwd === "admin") {
            obj = {
                status: 200,
                message: "ok11_666"
            }
        } else {
            obj = {
                status: 500,
                message: "用户名或者密码不对11_666"
            }
        }
        res.send(obj);
    }
}
module.exports = loginModules;