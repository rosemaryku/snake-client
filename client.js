// Function connect establishes a connection with the game server and return an object
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // conn.on("closes", () => {});

  conn.on("data", (input) => {
    console.log(input);
  });

  return conn;
  // Conn object that Node returns represented the connection that you have with the server
};

module.exports = { connect };
