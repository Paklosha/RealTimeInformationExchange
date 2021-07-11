<template>
  <div class="container">
    <div class="jumbotron">
      <h2>Real-Time Exchange Information With Microservices on NodeJs (ExpressJs), RabbitMQ && SocketIO</h2>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Change</th>
            <th>Percentage</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in stocks" :key="stock">
            <td>{{ stock.name }}</td>
            <td>{{ stock.value }}</td>
            <td>{{ stock.change }}</td>
            <td>{{ stock.percentage }}</td>
            <td>
              <img
                :src="require(`@/assets/images/${stock.image}.png`)"
                width="50px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  name: "HelloWorld",
  data: function () {
    return {
      connection: null,
      stocks: null,
    };
  },
  created: function () {
    const socket = io("ws://localhost:1923");

    socket.on("connect", () => {
      console.log("User connected");
    });

    // handle the event sent with socket.emit()
    socket.on("updatedStock", (data) => {
      this.stocks.forEach((item, index) => {
        if (data.name == item.name) {
          this.stocks[index] = data;
          this.stocks[index].image = data.change > 0 ? "green" : "red";
        }
      });
    });
  },
  mounted() {
    this.axios.get("http://localhost:9480/getstockData").then((response) => {
      this.stocks = response.data;
      this.stocks.forEach((item) => {
        item.image = item.change > 0 ? "green" : "red";
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 50px;
}
</style>
