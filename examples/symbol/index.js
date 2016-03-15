'use strict';

const symbol = Symbol.for('toolbag');
const manager = global[symbol];

// Create a heapdump in the toolbag data directory
manager.execute({
  command: 'heapdump-create',
  options: { name: 'my-heapdump' }
});
