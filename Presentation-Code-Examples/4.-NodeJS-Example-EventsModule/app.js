// Node.js Events Module - Event Emitter
// Link to Node.js documentation: https://nodejs.org/docs/latest/api/events.html

// First letter of every word is uppercase for JS classes (ES6) - convention.
// A class is a container for related properties and functions (called methods).
const EventEmitter = require("events");
const emitter = new EventEmitter(); // EX. Class: Fruit and Object: Orange

// Register a listener for the event.
// Emitter iterates over all regisrered listeners and calls them synchronously. 
emitter.on("messageRecorded_Test_1", function() {
    console.log("Listener was called for Test_1");
});

// Raise an event.
emitter.emit("messageRecorded_Test_1"); // Signal event has happened, make noise.
emitter.emit("messageRecorded_Test_1");

console.log("\n===========================================================\n");

// --------------------------------------------------------------------------------

// Node.js Events Module - Event Emitter with Arguments
// Link to Node.js documentation: https://nodejs.org/docs/latest/api/events.html#passing-arguments-and-this-to-listeners

// Register a listener for the event.
// Emitter iterates over all regisrered listeners and calls them synchronously. 
emitter.on("messageRecorded_Test_2", function(arg) { // arg also called e, event, etc.
    console.log("Listener was called for Test_2", arg);
});

// // Same code as messageRecorded_Test_2 emitter but with arrow function.
// emitter.on("messageRecorded_Test_2", (arg) => {
//     console.log("Listener was called for Test_2", arg);
// });

emitter.emit("messageRecorded_Test_2", { id: 123, url: "https://"}); // Event with arguments.

// --------------------------------------------------------------------------------

// Node.js Events Module - Extending Event Emitter
// Link to Node.js documentation: https://nodejs.org/docs/latest/api/events.html#passing-arguments-and-this-to-listeners