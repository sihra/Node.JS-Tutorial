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

module.exports = Logger;