const WebSocket = require("ws");
var models = require("./server.js").models;

const ws = new WebSocket.Server({ port: 8081 });
ws.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("got message", JSON.parse(message));
  });
});
