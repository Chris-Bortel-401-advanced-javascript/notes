'use strict';

const mongoose = require('mongoose');
const Note = require('./model/notes-schema');
class Notes {
  constructor(obj) {
    if(obj.command.action) {
      this.execute(obj.command);
    }
  }

  execute(command) {
    switch (command.action) {
    case 'add':
    case 'a':
      this.add(command.payload , command.category);

      break; //breaks me out of the case
    case 'list':
    case 'l':

      return this.list(command.payload);

    default:return Promise.resolve();
    }
  }

  async add(text, category) {
    let note = new Note({text:text, category:category});

    let saveNote = await note.save();
    console.log('adding note', saveNote.text);
    return saveNote;
  }

  async list(category) {
    let dbSearch = category?{category}:{};
    let allNotes = await Note.find(dbSearch);

    allNotes.forEach(note => {
      console.log(note.text);
      console.log(`Category: ${note.category}  ID: ${note.id}`);
      console.log('--------------------------------------------------');
    });

    mongoose.disconnect();
  }
}

module.exports = Notes;
