'use strict';
// jest always goes at the top
jest.mock('minimist');

const minimist = require('minimist');

const Input = require('../lib/input.js');

describe('Command Line Note Taker', () => {
  // refers to what we are testing
  it('with a good input, validate() returns true and creates a new instance of both action and payload', () => {
    minimist.mockImplementation(() => {
      return {
        a: 'this is a new note',
      };
    });

    const opts = new Input();
    expect(opts.command.action).toBeDefined();
    expect(opts.command.payload).toBeDefined();
  });

  // The Class’ valid() method returns false
  it('returns undefined if the validate() method returns false', () => {
    minimist.mockImplementation(() => {
      return {
        wsd: 'not a note',
      };
    });

    const opts = new Input();
    console.log('opts line 32', opts);
    expect(opts.command.action).toBeUndefined();
    expect(opts.command.payload).toBeUndefined();
  });

  it('returns true if the action and the payload exist', () => {
    minimist.mockImplementation(() => {
      return {
        a: 'this is a valid input',
      };
    });
    
  });


});





// instiation an instance of the mockImplementation(), which acts as a mock command line for the test


