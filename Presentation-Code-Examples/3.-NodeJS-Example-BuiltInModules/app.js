// Example of the Node.js Built-In Module: Path.
// Link to Node.js documentation: https://nodejs.org/docs/latest/api/path.html
const path = require("path");
console.log("Path Module Examples:\n");

var pathObject = path.parse(__filename);
console.log(pathObject);

console.log("\n===========================================================\n");

// --------------------------------------------------------------------------------

// Example of the Node.js Built-In Module: OS.
// Link to Node.js documentation: https://nodejs.org/docs/latest/api/os.html
const os = require("os");
console.log("Path Module Examples:\n");

// Both functions that are part of the os module give you total memory in bytes.
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory ${totalMemory} bytes. (${totalMemory / 1000000000} GB)`);

// Template string example.
// ES6 / ES2015 : ECMAScript 6
console.log(`Total Free Memory ${freeMemory} bytes. (${freeMemory / 1000000000} GB)`);

console.log("\n===========================================================\n");

// --------------------------------------------------------------------------------

// Example of the Node.js Built-In Module: File System.
// Link to Node.js documentation: https://nodejs.org/docs/latest/api/fs.html
const fs = require("fs");

console.log("File System Example - Asynchronous:\n");
// Want to use asynchronous, non-blocking methods. Better performance.
// Asynchronous functions take a function as a second argument.
// Node will call the function when the async function completes.
// We call this an event callback. Here an anonymous function is
// used as a callback for the fs.readdir method to handle the result
// of reading the current directory.
var filesAsync = fs.readdir("./", function(error, filesResult){

    if(error) {
        console.log("Error", error);
    } else {
        console.log("Files", filesResult);
    }
});

console.log("HELLO!!!")

// --------------------------------------------------------------------------------
