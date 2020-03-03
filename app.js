var express=require("express");
var userRouter=require("./routers/user.js");
var bodyParser=require("body-parser");
var app=express();
app.listen(8080);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use("/user",userRouter);