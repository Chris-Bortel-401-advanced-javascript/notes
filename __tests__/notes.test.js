'use strict';

jest.mock('minimist');

const minimist = require('minimist');

const Notes = require('../lib/notes.js'),

describe('notes', () => {

  let spy;
  // let appSpy;

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log');
    // appSpy = jest.spyOn(Notes, 'yell'),

  });

  afterEach(() => {
    spy.mockRestore();
  })

  it('can take notes from my terminal', () => {

    expect(true).toBeTruthy();

  });

});
