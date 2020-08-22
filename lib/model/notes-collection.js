'use strict';

const Note = require('../model/notes-schema');
class Notes {
  
  constructor() {

  }

  get(id) {
    if (id) {
    return Note.findById();
  } 
  else {
    return Note.find({});
    
  }
}
