# RealTimeInformationExchange
Real-Time Exchange Information With Microservices on NodeJs (ExpressJs), RabbitMQ &amp;&amp; SocketIO


# Usage and development

- execute **npm run serve** command from vueui directory
- execute **node service.js** command from root directory
- execute **node consumer.js** from consumer directory
- use http://localhost:9480/updatestockData post route to send updated stocks and see real-time client changes  

Example data-set you can see below

```
{
    "name":"Nikkei 225",
    "value":2000,
    "change": 78.03,
    "percentage": 0.88
}
```




