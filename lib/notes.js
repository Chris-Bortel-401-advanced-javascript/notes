'use strict';

function Notes(obj) {
  this.command = obj.command.action; // line 21
  this.payload = obj.command.payload; // line 22
}

Notes.prototype.execute = function () {
  switch (this.command) {
  case 'add':
    this.add(this.payload);
    break; //breaks me out of the case

  default:
    break;
  }
};

Notes.prototype.add = function (payload) {
  console.log(`Adding Note: ${payload}`);
};

module.exports = Notes;
