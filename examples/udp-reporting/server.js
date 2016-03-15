'use strict';

const Dgram = require('dgram');
const server = Dgram.createSocket('udp4');

server.on('message', (message, rinfo) => {
  console.log(message.toString());
  console.log();
});

server.on('listening', () => {
  const address = server.address();

  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(5001);
