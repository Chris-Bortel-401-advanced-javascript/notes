'use strict';

const mongoose = require('mongoose');
const Note = require('./model/notes-schema');
class Notes {
  constructor(obj) {
    this.command = obj.command.action;
    this.payload = obj.command.payload;
  }

  execute() {
    switch (this.command) {
    case 'add':
      console.log('this is payload line 14', this.payload);
      this.add(this.payload);
      break; //breaks me out of the case

    default:
      break;
    }
  }

  add(payload) {
    let note = new Note(payload);
    console.log(`Adding Note: ${note}`);
    note.save();
  }
  
}

module.exports = Notes;
