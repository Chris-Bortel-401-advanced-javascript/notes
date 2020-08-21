'use strict';

jest.mock('minimist');

const minimist = require('minimist');

const Note = require('../lib/notes.js');

describe('command', () => {

  let spy;

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('does not log anything if was not a valid command', () => {
    const command = { 'command': { 'x': 'coconut'} };
    const note = new Note(command);
    expect(console.log()).not.toHaveBeenCalled;
  });

  it('does log the add and the data', () => {
    const command = { 'command': { 'a': 'coconut'} };
    const note = new Note(command);
    expect(console.log()).toHaveBeenCalled;
  });

});


// for execute function
// it('with valid input the case returns an object and does something with that object in the mongoDB)
// TODO: Make a new instance of Notes, line 5 notes.js
// TODO: Assert that each switch case returns the object that is expected by their functions
