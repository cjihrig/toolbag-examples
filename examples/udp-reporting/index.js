'use strict';

const fs = require('fs');
const http = require('http');

console.log('\n\nAPP STARTED');
setInterval(function () {
  fs.readFile(__filename, () => {});
  fs.readFile(__filename, () => {});
}, 10);

setInterval(function () {
  http.get('http://www.google.com');
}, 500);
