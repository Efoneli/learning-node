let events = require('events');

//creating an event emitter
let eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', () => {
    console.log('connection successful');
})

// firing the connection event
eventEmitter.emit('connection');