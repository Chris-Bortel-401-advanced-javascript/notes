'use strict';

const Note = require('../model/notes-schema');
class NotesCollection {
  
  constructor() {

  }

  get(category) {
    if (category) {
      return Note.find(category);
    }
    else {
      return Note.find();

    }
  }
}
// post

// update

// delete

module.exports = NotesCollection;
