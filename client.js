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
  // notify when connection is established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    // write nickname to server 
    conn.write("Name: JER");
    // move snake up
    conn.write("Move: up");
    // move snake left
    setInterval(() => {
      conn.write("Move: left")
    }, 2000);
  });


  return conn;
}

module.exports = {
  connect
}