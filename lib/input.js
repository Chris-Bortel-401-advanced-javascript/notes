'use strict';

let Input = function () {
  this.action = action;
  this.payload = value;
};

const minimist = require('minimist');

// 1. Takes input --
const args = minimist(process.argv.slice(2));
// console.log('this is args', args);

//=========== This is the point at which we have data from the user to evaluate =================

const action = (Object.keys(args).slice(1));
// console.log('this is action line 29', action);
// console.log('this is typeOf action line 29 is:', typeof action);
// payload is the note that I am adding... 
const value = (Object.values(args).slice(1)); 
// console.log('this is value line 32',value);

module.exports = Input;
