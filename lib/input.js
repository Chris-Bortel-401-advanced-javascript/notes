'use strict';

const minimist = require('minimist');
const Input = function () {
  const args = minimist(process.argv.slice(2));
  this.command = this.validate(args);
};

Input.prototype.validate = function (args) {
  let possibleArgs = {
    a: 'add',
    add: 'add',
  };

  let argKeys = (Object.keys(args));
  let filter = argKeys.filter(args => possibleArgs[args] )[0];

  return {
    action: possibleArgs[filter],
    payload: args[filter],
  };
};

Input.prototype.validInput = function () {
  if (this.command.action && this.command.payload && this.command.payload !== true) {
    return true;
  }
  return false;
};

module.exports = Input;

// return true if the input is valid, return false if invalid
// a valid input is defined as an object with an action and a payload
// and is stored in this.command (see the constructor function)
// a well-formed command will look like { action: 'add', payload: 'hello' }
// we need to check if action exists, if payload exists AND if payload is not the boolean true

// if the
