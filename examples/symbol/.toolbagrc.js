'use strict';

const ToolbagPlugins = require('toolbag-plugins');

module.exports = function config (defaults, callback) {
  callback(null, {
    plugins: [
      {
        plugin: ToolbagPlugins.Heapdump,
        options: defaults.data
      },
      { plugin: ToolbagPlugins.SharedSymbol }
    ]
  });
};
