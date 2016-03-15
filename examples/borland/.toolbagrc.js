'use strict';

const ToolbagPlugins = require('toolbag-plugins');

module.exports = function config (defaults, callback) {
  callback(null, {
    plugins: [
      {
        plugin: ToolbagPlugins.BorlandCommander,
        options: {
          host: 'http://localhost:5000'
        }
      },
      {
        plugin: ToolbagPlugins.HttpReporter,
        options: {
          id: 'http reporter',
          method: 'POST',
          url: 'http://localhost:5000/report',
          options: {}
        }
      },
      { plugin: ToolbagPlugins.Signal },
      {
        plugin: ToolbagPlugins.StatsCollector,
        options: {
          enabled: true,
          period: 1000,
          eventLoopLimit: 30,
          features: {
            process: true,
            system: true,
            cpu: true,
            memory: true,
            gc: true,
            handles: true,
            requests: true,
            eventLoop: true,
            meta: {
              tags: ['borland-example']
            }
          }
        }
      }
    ]
  });
};
