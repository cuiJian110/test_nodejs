/*
 * @Author: your name
 * @Date: 2019-12-05 16:39:36
 * @LastEditTime: 2019-12-06 10:50:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nnode\interface\home.js
 */
const conn = require("../db/gz");
const DB_NAME = require("../db/db_name");
// console.log(conn.Protocol.ConnectionConfig);
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
    getStudents(req,res) {
        const sql = `select * from ${DB_NAME} order by id`;
        // console.log(sql);
        conn.query(sql,(err,result,field) => {
            // console.log(result);
            res.send(result)
        })
    },
    addStudents(req, res) {
        const {name, gender} = req.body;
        const sql = `insert into ${DB_NAME} (name, gender) values ("${name}","${gender}")`;
        // console.log(sql);
        conn.query(sql,(err,results) => {
            // console.log(results);
            if(err) {
                return res.send({
                    status: 500,
                    message: "发表失败"
                })
            }
            if(results.affectedRows !==1) {
                res.send({
                    status: 501,
                    message: "添加失败"
                })
            } else {
                res.send({
                    status: 200,
                    message: "添加成功"
                })
            }
        })
    },
    delStudent(req,res) {
        const sql = `delete from ${DB_NAME} where id = ${req.body.id}`;
        conn.query(sql,(err,results) => {
            console.log(results);
            if(results.affectedRows === 1) {
                res.send({
                    status: 200,
                    message: "del成功"
                })
            }
        })
    },
    editStudent(req, res) {
        const {id, name, gender} = req.body;
        const sql = `update ${DB_NAME} set name="${name}",gender="${gender}" where id=${id}`;
        conn.query(sql, (err,results) => {
            if(results.affectedRows === 1) {
                res.send({
                    status: 200,
                    message: "update success"
                })
            } else {
                res.send({
                    status: 500,
                    message: "update false"
                })
            }
        })
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