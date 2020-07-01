const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // message when we get booted from server for idling
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  conn.on('connect', () => {
    conn.write("Name: JER");
  });

  return conn;
}

module.exports = {
  connect
}