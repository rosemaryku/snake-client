const { IP, PORT, NAME } = require("./constants");

// Function connect establishes a connection with the game server and return an object
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for when connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write(NAME);
  });

  // Event handling for when program is idling
  conn.on("data", (input) => {
    console.log(input);
  });

  // Conn object represents the client-server connection
  return conn;
};

module.exports = { connect };
