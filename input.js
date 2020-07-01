const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    }
  });

  return stdin;
}

module.exports = {
  setupInput
}