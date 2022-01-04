require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');


const routes = require('./routes');
const { swagger } = require('./configs');
//const { security } = require('./middlewares');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.set('trust proxy', 1);


app.disable('x-powered-by')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/bulk-sms-services', swaggerUi.serve, swaggerUi.setup(swagger));

//app.use(security);

app.use('', routes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ status: false, message: 'Internal server error' });
});

server.listen(port, () => {
  console.log(
    `BULK SMS Service is running on http://localhost:${port}`
  );
});

module.exports = app;
