'use strict';
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');


const url = process.env.MONGOOSE_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Input = require('./lib/input');
const Notes = require('./lib/notes.js');

const input = new Input();
// if(input.validInput() === false){
//   help();
// }

const notes = new Notes(input);

// input.validInput()?notes.execute(): help();

function help() {
  console.log('Sorry, that input is not valid.');
  process.exit();
}
