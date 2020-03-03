var express=require("express");
var pool=require("../pool.js");
var router=express.Router();
// 登录
router.get("/login/:phone&:upwd",function(req,res){
  var $phone=req.params.phone;
  var $upwd=req.params.upwd;
  var sql="select * from user where phone=? and upwd=?";
  pool.query(sql,[$phone,$upwd],function(err,result){
    if(err) throw err;
    if(result.length>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});
// 注册
router.post("/reg",(req,res)=>{
  var obj=req.body;
  var sql="insert into user set ?";
  pool.query(sql,[obj],function(err,result){
    if(err) throw err;
    if(result.affectedRows>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});

module.exports=router;