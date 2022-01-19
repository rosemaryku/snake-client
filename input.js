const {
  KEYS,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
} = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      console.log("Thank you for playing!");
      process.exit();
    }

    if (key === MOVE_UP_KEY) {
      connection.write("Move: up");
    }

    if (key === MOVE_LEFT_KEY) {
      connection.write("Move: left");
    }

    if (key === MOVE_DOWN_KEY) {
      connection.write("Move: down");
    }

    if (key === MOVE_RIGHT_KEY) {
      connection.write("Move: right");
    }

    if (KEYS[key] !== undefined) {
      connection.write(KEYS[key]);
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
