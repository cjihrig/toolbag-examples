'use strict';

const ToolbagPlugins = require('toolbag-plugins');

module.exports = function config (defaults, callback) {
  callback(null, {
    plugins: [
      {
        plugin: ToolbagPlugins.Policy,
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
