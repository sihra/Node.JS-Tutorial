const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);

// Host - root domain
console.log(myUrl.host);

// Host name - Doesn't include the port
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname);

// Serialized Query - Everything after ?
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params dynamically
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach(
    function(value, name){ 
        console.log(`${name}: ${value}`) 
    } 
);