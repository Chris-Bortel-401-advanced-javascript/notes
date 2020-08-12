// lib/notes.js
// Exports a constructor function

'use strict';

function Notes(obj) {
  this.command = obj.action; // corresponds to line 21
  this.note = obj.payload;
}
// execute function
//if statement that evaluates the this.command

Notes.prototype.add = function () {
  return `Adding Note ${this.note}`;
};
//prototype method called execute()

// prototype method call add()
// // This is represents a note with an ED and the text of the note as a property. 
// // // Need a console.log for the output


module.exports = Notes;


// export the command of what that action is doing from input. 


//execute
// what obj do I want 
// 