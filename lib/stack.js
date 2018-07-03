'use strict';

let pushpop = require('./stack-push-pop.js');
let shiftunshift = require('./stack-shift-unshift.js');

class Stack {
  constructor(type) {
    let implementation = shiftunshift;
    switch(type) {
    case 'pushpop':
      implementation = pushpop;
      this.stack = new implementation();
      break;
    case 'shiftunshift':
      implementation = shiftunshift;
      this.stack = new implementation();
      break;
    default:
      this.stack = new implementation();
      break;
    }
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }
}



module.exports = Stack;
