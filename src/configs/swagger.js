const swaggerJsDoc = require('swagger-jsdoc');

const { port } = require('./env');
// const { port } = process.env;

// console.log(port);
const swagger = {
  swaggerDefinition: {
   // host: `${process.env.BT_SWAGGER_MS_BASE_URL}/email`,
    info: {
      version: '2.0.0',
      title: 'BULK SMS MESSAGE SERVICE',
      contact: { name: 'Miriam' },
      servers: [{ url: `http://localhost:${port}` }],
    },
  },
  apis: ['./src/swaggerDocs/**/*.yml'],
};

module.exports = swaggerJsDoc(swagger);
