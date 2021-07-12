const express=require('express')
const route=express()
const { container } = require('./di-setup');

const devController = container.resolve('devController');

route.get('/print',devController.print)
route.get('/hi',(req,res)=>{
    console.log("hello world");
     res.json({"message":"hello world"});
})

module.exports=route