'use strict';

const Path = require('path');
const NspCheck = require('toolbag-plugin-nsp-check');

module.exports = function config (defaults, callback) {
  callback(null, {
    errors: {
      policy: 'throw'
    },
    plugins: [
      {
        plugin: NspCheck,
        options: {
          checkOnRegister: true,
          packagePath: Path.join(__dirname, 'package.json')
        }
      }
    ]
  });
};
