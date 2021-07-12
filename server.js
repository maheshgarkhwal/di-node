const express=require('express')
const {setup}=require('./di-setup')

setup();
const route=require('./route')

class Server{
    constructor(){
        this.app=express();
        this.setup()
    }
    setup() {
        this.app.use('/', route);
    }

    run(){
        this.app.listen(3000, ()=>{
            console.log("server started on port 3000")
        })
    }
}
module.exports = Server;
