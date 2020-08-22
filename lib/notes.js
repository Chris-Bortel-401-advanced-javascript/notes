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
    console.log('command notes.js::::', command)
    switch (command.action) {
    case 'add':
    case 'a':
      this.add(command.payload, command.category);

      break; //breaks me out of the case
    case 'list':
    case 'l':
      return this.list(command.payload);
    case 'delete':
    case 'd':
      return this.delete(command.payload);
    default:
      return Promise.resolve();
    }
  }

  async add(text, category) {
    try {
      let note = new Note({ text: text, category: category });

      let saveNote = await note.save();
      console.log(`Adding Note:`, saveNote.text);
      mongoose.disconnect();
      return saveNote;
    } catch (e) {
      console.error(e);
    }
  }

  // delete function
  // what is the id? how do I target it? do I declare new variables?

  async delete(id) {
    console.log('id line 46 notes.js', id);
    try {
      await Note.findByIdAndRemove(id);
      mongoose.disconnect();

    }
    catch (e) {
      console.error(e);
    }
  }

  async list(category) {
    try {
      let dbSearch = category ? { category } : {};
      let allNotes = await Note.find(dbSearch);
      // console.log('allnotes notes.js', allNotes);

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
