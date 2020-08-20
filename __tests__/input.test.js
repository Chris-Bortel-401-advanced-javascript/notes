'use strict';
// jest always goes at the top
jest.mock('minimist');

const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'this is a new note',
    add: 'this is a new note',
  };
});

const Input = require('../lib/input.js');

describe('Command Line Note Taker', () => {
  // refers to what we are testing
  it('with a good input, validate() returns true and creates a new instance of both acton and payload', () => {
    // instantiates new Input object for this test
    const opts = new Input();
    const command = opts.validate({a: 'this should pass'});
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();

  });
//   Given invalid input:
// The Class’ valid() method returns false
  it('returns undefined if the validate() method returns false', () => {
    minimist.mockImplementation(() => {
      return {
        wsd: 'not a note',
      };
    });
  });

  it('returns true if validInput contains both a command and an action', () => {
    
  })
});





// instiation an instance of the mockImplementation(), which acts as a mock command line for the test


