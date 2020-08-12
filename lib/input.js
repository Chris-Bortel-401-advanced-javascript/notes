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
  let argKeys = (Object.keys(args));
console.log('this is args', args);
console.log('this is action', action);

  if (argKeys[1] === 'a' || argKeys[1] === 'add') {
    return {
      action: argKeys[1],
      payload: args.add,
    };
  }
};

module.exports = Input;
