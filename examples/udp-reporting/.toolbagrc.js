'use strict';

const ToolbagPlugins = require('toolbag-plugins');
const UdpReporter = require('toolbag-plugin-udp-reporter');

module.exports = function config (defaults, callback) {
  callback(null, {
    plugins: [
      {
        plugin: UdpReporter,
        options: {
          id: 'udp reporter',
          socketType: 'udp4',
          port: 5001,
          host: 'localhost'
        }
      },
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
              tags: ['udp-example']
            }
          }
        }
      }
    ]
  });
};
