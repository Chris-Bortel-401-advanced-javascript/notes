// lib/notes.js
// Exports a constructor function

'use strict';

function Notes(obj) {
  this.command = obj;
}

Notes.prototype.add = function () {

}
//prototype method called execute()

// prototype method call add()
// // This is represents a note with an ED and the text of the note as a property. 
// // // Need a console.log for the output


module.exports = Notes;
