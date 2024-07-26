// Node never executes our code directly. It always wraps our code inside of a function.
// This function is used behind-the-scenes. It is called a module wrapper function.

// What happens when we console.log the module?
//console.log(module);
// console.log(__filename);
// console.log(__dirname);

// =======================================================
// Module example - want to focus on the modularity here.
// =======================================================

// Variable and function are private to this file.
// What if we want to use it in app.js file?
var myUrl = 'http://mylogging.io.log'; // Example of implementation detail.

function myLoggingFunction(message) {
    // Send an HTTP request. For now, we are just logging in example.
    console.log(message);
}

// Usually want to hide implementation detail. Only want
// to export a subset of the members to the outside.
//module.exports.myEndpoint = myUrl; // Can have different export name.
module.exports.myLoggingFunction = myLoggingFunction;