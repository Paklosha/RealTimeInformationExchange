const app = require('express')();
var cors = require('cors')
const server = require('http').Server(app);

app.use(cors())

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

module.exports = {
    socket : any = io.on("connection", (webSocketClient) => {
        console.log('sockets are connected')
      })
};

server.listen(1923);