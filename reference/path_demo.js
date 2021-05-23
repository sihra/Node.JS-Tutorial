const path = require('path');

// Base file name returned
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename)); 

// File extension
console.log(path.extname(__filename));

// Create path object
// We can access any property through this, like base
console.log(path.parse(__filename).base);         

// Concatenate paths
// If we have issues with delimiters, like with forward/back slash etc for different OSs
console.log(path.join(__dirname, 'test', 'hello.html'));
