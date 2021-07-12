class devservice{

    constructor({devService2}){
        this.devservice2=devService2
    }
    print(){
        this.print2();
        this.devservice2()
    }

    print2(){
        console.log("printed on the console")
    }
    
}

module.exports=devservice