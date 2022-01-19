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

    if (key === "w") {
      connection.write("Move: up");
    }

    if (key === "a") {
      connection.write("Move: left");
    }

    if (key === "s") {
      connection.write("Move: down");
    }

    if (key === "d") {
      connection.write("Move: right");
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
