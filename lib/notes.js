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
      // break;
    default:return Promise.resolve();
      // break;
    }
  }
// TODO: should I put this into the doActionToDb?
  async add(text, category) {
    let note = new Note({text:text, category:category});
    
    // console.log(`Adding Note: ${note}`);
    let saveNote = await note.save();
    console.log('adding note', saveNote.text);
    return saveNote;
    // mongoose.disconnect();

  }

  async list(category) {
    let dbSearch = category?{category}:{};
  // console.log('line 36 notes.js:::', dbSearch)
    let allNotes = await Note.find(dbSearch);
    // console.log('All Notes', allNotes);

 
    allNotes.forEach(note => {
      console.log(note.text);
      console.log(`Category: ${note.category}  ID: ${note.id}`);
      console.log('--------------------------------------------------');
    });
  
    mongoose.disconnect();
  }
}


module.exports = Notes;
