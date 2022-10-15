// creating server ===========================
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);

// creating event ===========================
const EventEmitter = require("events");

const customEmmitter = new EventEmitter(); // instance of object

customEmmitter.on("response", (name, id) => {
  // listen for event
  console.log(`data recieved ${name} with id:${id}`);
});

customEmmitter.on("response", () => {
  console.log(`Some other logic here `);
});

customEmmitter.emit("response", "john", 34); // emit event
