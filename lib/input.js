'use strict';

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
class Input {
  constructor(){
    this.command = this.validate(args);
  }

  validate() {
    let possibleArgs = {
      a: 'add',
      add: 'add',
      category: 'category',
      c: 'category',
      list: 'list',
      l: 'list',
    };

    let argKeys = (Object.keys(args));
    let filter = argKeys.filter(args => possibleArgs[args]);
    let payload = {text: '', category:''};
    let action = '';
    //instantiating new instance on 
    for(let i=0; i < filter.length; i++) {
      if(filter[i] === 'add') {
        payload.text = args[filter[i]];
        action = 'add';
      }
      if(filter[i] === 'c') {
        payload.category = args[filter[i]];
      }
    }

    return {
      action: action,
      payload: payload,
    };
  }

  validInput() {
    console.log('this.command+++++++++++++++++++++ line 40:', this.command);
    if (this.command.action && this.command.payload) {
      return true;
    }
    return false;
  }
}


module.exports = Input;
