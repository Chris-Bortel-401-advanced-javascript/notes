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


