let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      process.stdout.write('.');
      if (key === '\u0003') {
        process.exit();
      } else if (key === '\u0077') {
        conn.write("Move: up");
      } else if (key === '\u0061') {
        conn.write("Move: left");
      } else if (key === '\u0073') {
        conn.write("Move: down");
      } else if (key === '\u0064') {
        conn.write("Move: right");
      }
    });
  }
  handleUserInput();
  return stdin;
}


module.exports = {
  setupInput,
}