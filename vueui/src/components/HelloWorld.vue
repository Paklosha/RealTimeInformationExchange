<template>
<div class="container">
  <div class="jumbotron">
    <h2>Coders RealTime Stock Banner</h2>
  </div>
  <div class="table-responsive">
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Value
          </th>
          <th>
            Change
          </th>
          <th>
            Percentage
          </th>
          <th>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in stocks" :key="stock">       
          <td>{{stock.name}}</td>
          <td>{{stock.value}}</td>
          <td>{{stock.change}}</td>
          <td>{{stock.percentage}}</td>       
          <td><img :src="require(`@/assets/images/${stock.image}.png`)" width="50px"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>

import { io } from "socket.io-client";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
     data: function() {
    return {
      connection: null,
      stocks: null
    }
  },
  methods: {
    sendMessage: function(message) {
      console.log("Hello")
      console.log(this.connection);
      this.connection.send(message);
    }
  },
  created: function() {
    const socket = io("ws://localhost:1923");

socket.on("connect", () => {
  console.log('SUCCSESSFULLY CONNECTED')

});

// handle the event sent with socket.send()
socket.on("message", data => {
  
  console.log('CATCH MESSAGE',data);
});

// handle the event sent with socket.emit()
socket.on("updatedStock", (elem1) => {
  console.log('FROM UPDATEDSTOCK',elem1);
});
   // socket.on('updatedStock',(data) => console.log(data))
    /* console.log('dd',this.socket)
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket("ws://localhost:1923")

    this.connection.onmessage = function(event) {
      console.log('DEBUG')
      console.log(event);
    }

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }

    this.connection.addEventListener('updatedStock', function (event) {
    console.log('Message from server ', event.data);
}); */

},
  mounted () {
    this.axios
      .get('http://localhost:9480/getstockData')
      .then(response => {
        this.stocks = response.data;
        this.stocks.forEach(item => {
          item.image = item.change > 0 ? "green" : "red";
        })


        console.log(this.stocks)
        })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 50px;
}
</style>
