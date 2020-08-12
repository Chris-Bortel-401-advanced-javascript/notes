'use strict';

const minimist = require('minimist');
// 1. Takes input --
// console.log('this is args', args);

const Input = function () {
  const args = minimist(process.argv.slice(2));
  this.action = this.validate(args);
  // this.payload = payload;
};

Input.prototype.validate = function (args) {
 
  let possibleArgs = {
    a: 'add',
    add: 'add',
  };

  let argKeys = (Object.keys(args));
  console.log('this is argKey line 20', argKeys);
  let filter = argKeys.filter(args => possibleArgs[args] )[0];
  console.log('this is filter line 20', filter);

  return {
    action: possibleArgs[filter],
    payload: args[filter],
  };
};

module.exports = Input;
