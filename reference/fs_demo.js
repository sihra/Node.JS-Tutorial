const fs = require('fs');
const path = require('path');

// Create folder - Asynchronous / it'll finish in the callback
// {} = options (we don't have any), function is for callback that deals with possible errors
// Alt way or function: err => { ... }
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if(err) throw err;
    console.log('Folder created');
})

// Create and write to file - will overwrite to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err) {
    if(err) throw err;
    console.log('File created and written to');

    // Appending to a file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js!', function(err) {
        if(err) throw err;
        console.log('File created and written to');
    });
});

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data);
});