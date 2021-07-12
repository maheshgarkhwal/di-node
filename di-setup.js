const awilix=require('awilix')
const DevController=require('./controller/devcontroller')
const DevService=require('./service/devservice')
const DevService2=require('./service/devservice2')

const container=awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

function setup(){
    container.register({
        devController: awilix.asClass(DevController),
    
        // services
        devService: awilix.asClass(DevService),

        devService2: awilix.asValue(DevService2)
    })
}

module.exports={
    setup,
    container
}