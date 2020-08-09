'use strict';

function Notes(obj) {
  this.command = obj;
}

Notes.prototype.go = function () {
  return `Fetched ${this.command.url} using ${this.command.method}`;
}

module.exports = Request; 