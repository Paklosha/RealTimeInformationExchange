# RealTimeInformationExchange
Real-Time Exchange Information With Microservices on NodeJs (ExpressJs), RabbitMQ &amp;&amp; SocketIO

# Table of contents

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
    - [Sponsor](#sponsor)
    - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [License](#license)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)



# Usage and development
[(Back to top)](#table-of-contents)

- execute **npm run serve** command from vueui directory
- execute **node service.js** command from root directory
- execute **node consumer.js** from consumer directory
- use http://localhost:9480/getstockData post route to send updated stocks and see real-time client changes  

Example data-set you can see below

```
{
    "name":"Nikkei 225",
    "value":2000,
    "change": 78.03,
    "percentage": 0.88
}
```




