// Express would be easier to deal with routing
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    // Shows what url is being called
    // console.log(req.url);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    if(req.url === '/') {
        res.end('<h1> HomePage  </h1>');
    }
});

// Add dev: nodemon index in package.json to continuously update server with any changes

// Look for the environment variable first, and if not available run on 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));