// Node.js Http Module
// Link to Node.js documentation: https://nodejs.org/docs/latest/api/http.html
const http = require("http");

// This server is an event emitter.
const server = http.createServer((req, res) => { // same as writing function(req, res){}

    // If we want to build a backend service for our application (web or mobile),
    // we need to handle different routes here. As you write more routes, the
    // code gets more complex. So we can use a framework called Express.js that gives
    // our app a clean structure to handle different routes. Internally, the Express
    // framework is built on top of the http module in Node.js.
    if(req.url === '/') {
        res.write("Hello THAT Conference World! It is great to be here! I did not cause the Crowdstrike incident!rs");
        res.end();
    }
    if(req.url === '/api/conferences') {
        res.write("Result of accessing the /api/conferences url.");
        res.end();
    }
});

// "connection" is the name of the event from the Node.js docs.
// Anytime someone connects to the server (accesses a route above,
// this event fires off.
server.on("connection", (socket) => {
    console.log("New connection...");
});

// Can have the server listen on a specific port.
server.listen(3000);
console.log("Listening on port 3000...");