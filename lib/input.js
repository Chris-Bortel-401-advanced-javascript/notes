'use strict';

const minimist = require('minimist');
class Input {
  constructor(){
    let args = minimist(process.argv.slice(2));
    this.command = this.validate(args);
  }

  validate(args) {
    let possibleArgs = {
      a: 'add',
      add: 'add',
      category: 'category',
      c: 'category',
      list: 'list',
      l: 'list',
      d: 'delete',
      delete: 'delete',
    };

    let argKeys = Object.keys(args);
    let filter = argKeys.filter(args => possibleArgs[args])[0];

    return {
      action: possibleArgs[filter],
      payload: typeof args[filter] === 'string' ?args[filter]:undefined,
      category: args.category || args.c || 'miscellaneous',
    };
  }

  validInput() {
    // console.log('this.command+++++++++++++++++++++ line 40:', this.command);
    if (this.command.action && this.command.payload) {
      return true;
    }
    else {
      return false;

    }
  }
}



module.exports = Input;
