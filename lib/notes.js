// lib/notes.js
// Exports a constructor function

'use strict';

function Notes(obj) {
  this.command = obj.command.action; // corresponds to line 21
  this.payload = obj.command.payload;
}
// execute function
Notes.prototype.execute = function () {
  switch (this.command) {
  case 'add':
    this.add(this.payload);
    break; //breaks me out of the case

  default:

    break;
  }
  //make a switch case that checks if input c
};
//if statement that evaluates the this.command
// this.add();

Notes.prototype.add = function (payload) {
  console.log(`Adding Note: ${payload}`);
};
//prototype method called execute()

module.exports = Notes;
