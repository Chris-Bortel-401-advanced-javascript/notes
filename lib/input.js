'use strict';

const minimist = require('minimist');
class Input {
  constructor(){
    let args = minimist(process.argv.slice(2));
    console.log('args line 7', args);
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
    console.log('argkeys++++++++', argKeys);
    let filter = argKeys.filter(args => possibleArgs[args])[0];
    console.log('filter line 23 input.js', filter);

    return {
      action: possibleArgs[filter],
      payload: typeof args[filter] === 'string' ?args[filter]:undefined,
      category: args.category || args.c || 'miscellaneous',
    };
  }

  //TODO: What I want to do here is tell the user that they had an invalid entry here. 

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
