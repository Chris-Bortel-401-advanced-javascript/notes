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
      c: 'category',
    };

    let argKeys = (Object.keys(args));
    let filter = argKeys.filter(args => possibleArgs[args]);
    console.log('this is args at 19+++++++++++++++++++++ :', args);
    let payload = {text: '', category:''};
    let action = '';
    //instantiating new instance on 
    console.log('filter line 23+++++++++++++++++++', filter);
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

// return true if the input is valid, return false if invalid
// a valid input is defined as an object with an action and a payload
// and is stored in this.command (see the constructor function)
// a well-formed command will look like { action: 'add', payload: 'hello' }
// we need to check if action exists, if payload exists AND if payload is not the boolean true

// if the
