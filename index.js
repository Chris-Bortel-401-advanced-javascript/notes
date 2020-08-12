'use strict';

const Input = require('./lib/input');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

input.validInput()?notes.execute(): help();

function help() {
  console.log('this is not valid');
  process.exit();
}


// console.log(output);
