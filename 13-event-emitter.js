const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response',()=>{
    console.log('Data Received');
})

customEmitter.on('response',()=>{
    console.log('Some other logic');
})

customEmitter.on('response',(name,id)=>{
    console.log(`The data received as ${name} with id: ${id}`);
})

customEmitter.emit('response','John',34);