// Using the Events Emitter class 
const EventEmitter = require('events');
// Creates random universally unique identifier
const uuid = require('uuid');

// Generates random id
console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id:uuid.v4(), msg });
    }
}

// Export to use in other files
//module.exports = Logger;

// Running Logger Demo
const Logger = require('./logger');

const logger = new Logger();
logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello World!')
logger.log('Hi!')