class devcontroller{
    constructor({devService}){
        this.devservice=devService;

        this.print=this.print.bind(this)
    }

    print(req, res){
        try{
            const result=this.devservice.print();
            res.json("printed in console")
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = devcontroller;