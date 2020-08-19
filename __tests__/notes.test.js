'use strict';

jest.mock('minimist');

const minimist = require('minimist');

const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');
// appSpy = jest.spyOn(Notes, 'yell'),


// const note = new Note();
describe('command', () => {
  it('does not log anything if was not a valid command', () => {
    const command = { 'command': { 'x': 'coconut'} };
    const note = new Note(command);
    expect(console.log()).not.toHaveBeenCalled;
  });

  it('does log the add and the data', () => {
    const command = { 'command': { 'a': 'coconut'} };
    const note = new Note(command);
    // note.execute();
    expect(console.log()).toHaveBeenCalled;
  });



  // it('does not log anything if was not a valid command', () => {
  //   let command = note.execute({});
  //   expect(note.add).not.toHaveBeenCalled(command);
  // });

  // it('can take notes from my terminal', () => {

  //   expect(true).toBeTruthy();

  // });

});

// For the notes module tests, you will need to assert the following:
// Nothing is logged to the console if there was no command given
//// No command === no log to the console
// If the command (add) and data (the note) were both valid, assert that the console shows the output.
