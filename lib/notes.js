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
      this.add(command);
      break; //breaks me out of the case
    case 'list':
    case 'l':
      this.list(command);
      break;
    default:
      break;
    }
  }
// TODO: should I put this into the doActionToDb?
  async add(command) {
    let note = new Note(command.payload);
    console.log(`Adding Note: ${note}`);
    await note.save();
    mongoose.disconnect();

  }

  async list(command) {
    // let categoryNote = await Note.find(this.payload.category());
    // console.log('categoryNote', categoryNote)
  
    let allNotes = await Note.find();
    console.log('All Notes', allNotes);
  
    mongoose.disconnect();
  }
}


module.exports = Notes;
