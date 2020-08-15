'use strict';

class Notes {
  constructor(obj) {
    this.command = obj.command.action;
    this.payload = obj.command.payload;
  }

  execute() {
    switch (this.command) {
    case 'add':
      this.add(this.payload);
      break; //breaks me out of the case

    default:
      break;
    }
  }

  add(payload) {
    console.log(`Adding Note: ${payload}`);
  }
}

module.exports = Notes;
