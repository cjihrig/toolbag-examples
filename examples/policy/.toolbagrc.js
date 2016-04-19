'use strict';

const Policy = require('toolbag-plugin-policy');

module.exports = function config (defaults, callback) {
  callback(null, {
    plugins: [
      {
        plugin: Policy,
        options: {
          blacklist: {
            modules: {
              fs: 'log',
              child_process: {
                fork: 'terminate'
              }
            },
            bindings: {
              natives: 'log-verbose'
            }
          }
        }
      }
    ]
  });
};
