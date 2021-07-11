const app = require('express')();
var cors = require('cors')
const server = require('http').Server(app);

/* const WebSocket = require("ws");
const websocketServer = new WebSocket.Server({ server }); */
app.use(cors())

//const io = require("socket.io")(server);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});




/* websocketServer.on('close', function close() {
    console.log('disconnected');
  }); */

module.exports = {

    socket : any = /* websocketServer */io.on("connection", (webSocketClient) => {
        console.log('sockets are connected')

        webSocketClient.on("close", function(ev) {
          console.log('disconnected SOCKET');
        })

      })
};

server.listen(1923);