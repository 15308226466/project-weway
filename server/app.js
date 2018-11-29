//1.加载模块
const express = require("express");
const pool = require("./pool");
const webpack = require("webpack");
//2.创建express对象
var app =express();
//服务器node.js 允许跨域访问配置项
//2.1 引入跨域模块
const cors=require("cors");
//2.2 配置允许哪个程序跨域访问 脚手架
app.use(cors({
    origin:[
        "http://127.0.0.1:3001",
        "http://localhost:3001"
    ],
    credentials:true
}))
//3.指定静态目录
//服务器指定目录 绝对路径
// c:/xampp/htdocs/vueui/day01/public
app.use(express.static(__dirname+"/public"))
//4.绑定监听端口
app.listen(3000);

//功能一：任我行首页图片轮播
//GET/imagelist json
app.get("/imagelist",(req,res)=>{
    var obj= [
        {id:1,img_url:"http://127.0.0.1:3000/img/banner1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/banner2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/banner3.jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"}
    ];
    res.send(obj)
});
//    http://127.0.0.1:3000/imagelist