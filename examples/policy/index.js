'use strict';

/* eslint-disable no-unused-vars */
const Fs = require('fs');             // triggers log error
const Cp = require('child_process');

process.binding('natives');           // triggers log-verbose error
Cp.fork(__filename);                  // triggers terminate process error
console.log('hello world!');          // won't be executed
