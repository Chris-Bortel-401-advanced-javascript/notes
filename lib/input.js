'use strict';

const minimist = require('minimist');
// 1. Takes input --
const args = minimist(process.argv.slice(2));
// console.log('this is args', args);

const Input = function () {
  this.action = this.validate(args);
  // this.payload = payload;
};

Input.prototype.validate = function (args) {
  // validate
  let action = (Object.keys(args));
  // console.log('this is action on line 16', action);
  if (action[1] === 'add') {
    return {
      action: 'adding your note',
      payload: args.add,
    };
  } else if (action[1] === 'a') {
    return {
      action: 'adding your note',
      payload: args.a,
    }; 
  }

  // checking if object keys are there
  //// need to declare a variable that contains the key
  // need to write logic that if the action === --add or the args = -a

  // the Input then return the object


  // checking if the note is in the correct format
  // create object
};
// Have a prototype method call Input

// console.log('this is action line 29', action);
// console.log('this is typeOf action line 29 is:', typeof action);
// payload is the note that I am adding...
// const payload = (Object.values(args).slice(1));
// console.log('this is value line 32',value);

module.exports = Input;
