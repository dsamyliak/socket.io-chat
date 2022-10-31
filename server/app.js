const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("chat-message", (message) => {
    socket.broadcast.emit("chat-message", message);
  });
});
console.log("socket connection ready");

httpServer.listen(5000);
