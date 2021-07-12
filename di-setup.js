const awilix=require('awilix')
const DevController=require('./controller/devcontroller')
const DevService=require('./service/devservice')


const container=awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

function setup(){
    container.register({
        devController: awilix.asClass(DevController),
    
        // services
        devService: awilix.asClass(DevService),
    })
}

module.exports={
    setup,
    container
}