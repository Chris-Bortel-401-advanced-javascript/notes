'use strict';

const mongoose = require('mongoose');
const Note = require('./model/notes-schema');
class Notes {
  constructor(obj) {
    if (obj.command.action) {
      this.execute(obj.command);
    }
  }

  execute(command) {
    switch (command.action) {
    case 'add':
    case 'a':
      this.add(command.payload, command.category);

      break; //breaks me out of the case
    case 'list':
    case 'l':
      return this.list(command.payload);

    default:
      return Promise.resolve();
    }
  }

  async add(text, category) {
    try {
      let note = new Note({ text: text, category: category });

      let saveNote = await note.save();
      console.log(`Adding Note:`, saveNote.text);
      return saveNote;
    } catch (e) {
      console.error(e);
    }
  }

  async list(category) {
    try {
      let dbSearch = category ? { category } : {};
      let allNotes = await Note.find(dbSearch);

      allNotes.forEach((note) => {
        console.log(note.text);
        console.log(`Category: ${note.category}  ID: ${note.id}`);
        console.log('--------------------------------------------------');
      });
    } catch (e) {
      console.error(e);
    }

    mongoose.disconnect();
  }
}

module.exports = Notes;
