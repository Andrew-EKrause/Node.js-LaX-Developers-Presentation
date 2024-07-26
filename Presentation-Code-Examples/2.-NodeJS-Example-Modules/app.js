// To load a module, use require() function.
const myLogging = require('./myLogging'); // const so we don't overwrite module.

// What happens when you log module?
//console.log(module);

// Can run jshint to check for assignment to constant issues. Run "jshint app.js" for example.
// Install jshint using "npm install -g jshint".
// myLogging = 1; // <-- Do not assign to constant variable.

//console.log(myLogging); // Gives module details.
myLogging.myLoggingFunction("My own logging message!");