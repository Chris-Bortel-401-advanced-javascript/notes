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
  it('can take notes from my terminal', () => {
    // instantiates new Input object for this test
    const opts = new Input();
    const command = opts.validate({a: 'this should pass'});
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();

  });
//   Given invalid input:
// The Class’ valid() method returns false
  it('returns underfined if the validate() method returns false', () => {
    minimist.mockImplementation(() => {
      return {
        wsd: 'not a note',
      };
    });
  });
});





// instiation an instance of the mockImplementation(), which acts as a mock command line for the test


