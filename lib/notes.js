// lib/notes.js
// Exports a constructor function

'use strict';

function Notes(obj) {
  this.command = obj.action; // corresponds to line 21
  this.note = obj.payload;
}
// execute function
Notes.prototype.execute = function () {
  switch (this.command) {
  case 'add':
    this.add(this.note);
    break; //breaks me out of the case

  default: 
    console.log(`${this.command} is not a valid command`);
    break;
  }
  //make a switch case that checks if input c
};
//if statement that evaluates the this.command
// this.add();

Notes.prototype.add = function () {
  return `Adding Note ${this.note}`;
};
//prototype method called execute()

module.exports = Notes;
