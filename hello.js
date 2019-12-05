/*
 * @Author: your name
 * @Date: 2019-12-05 11:28:35
 * @LastEditTime: 2019-12-05 14:22:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\hello.js
 */
// exports.world = function() {
//     console.log("hellow");
// }
// const aaa = function() {
//     console.log("aaa");
// }
const obj = {
    name: "",
    setName(name) {
        this.name = name;
    },
    getName() {
        return this.name;
    }
}
exports.people = {
    name: "zs",
    age: 12
}
// module.exports = obj