'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
  return {
    a: 'this is a new note',
    add: 'this is a new note',
  };
});

const Input = require('../lib/input');

describe('Command Line Note Taker', () => {

  // refers to what we are testing
  it('can take notes from my terminal', () => {
    // instantiates new Input object for this test
    const opts = new Input();
    const command = opts.validate({a: 'this should pass'});
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();
    // const options = new Input();
    // console.log('this is options line 10++++++++++++++++++++++++++++++++', options);
    // expect(options.validate()).toBeTruthy();

  });
});





// instiation an instance of the mockImplementation(), which acts as a mock command line for the test


