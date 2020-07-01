// Stores the active TCP connection object.
let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
    if (key === 'e') {
      conn.write("Say: mkay");
    }
    if (key === 'q') {
      conn.write("Say: NyukNuk");
    }
    if (key === 'r') {
      conn.write("Say: bob loblaw");
    }
  });

  return stdin;
}

module.exports = {
  setupInput
}