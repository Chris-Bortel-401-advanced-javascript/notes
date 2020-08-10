'use strict';

const minimist = require('minimist');
// minimist parses the cli pulls the actual input and makes it easier to use the data.
//I am slicing of the node and and the file path and returning only the input
const args = minimist(process.argv.slice(2));
console.log(args);

//=========== This is the point at which we have data from the user to evaluate =================
// action is the key. (ex. --add) the slice is taking the empty key off. 
const action = (Object.keys(args).slice(1));
console.log(action);

// payload is the note that I am adding... 
const value = (Object.values(args).slice(1)); 
console.log(value); 


let Input = function () {
  this.action = action;
  this.payload = value;
};


// Input.prototype.getUrl = function (args = {}) {
//   if (args.url) { return args.url; }
//   else if (args.u) { return args.u; }
//   else { return undefined; }
// };

// Input.prototype.getMethod = function (args = {}) {
//   if (args.method === "get") { return args.method; }
//   else { return undefined; }
// };

// exporting funtion that is on line 8
module.exports = Input;