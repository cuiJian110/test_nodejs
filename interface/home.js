/*
 * @Author: your name
 * @Date: 2019-12-05 16:39:36
 * @LastEditTime: 2019-12-05 16:42:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\interface\home.js
 */
const homeModule = {
    getData(req , res) {
        console.log(req.params.id);
        console.log(req.query)
        const obj = {
            status: 200,
            data: [
                {id: 1, name: "zs11_000"},
                {id: 2, name: "ls11_000"}
            ]
        }
        res.send(obj);
    },
    testPost(req , res) {
        console.log(req.body.name);
        const obj = {
            status: 200,
            message: "操作成功_66611_000"
        }
        res.send(obj);
    }
}
module.exports = homeModule;