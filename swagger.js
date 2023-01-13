import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'REST-API',
      version: '1.0.0',
      description: 'Documentation of my REST-API',
    },
    servers: [{url: 'http://localhost:5000'}],
  },
  apis: ['./model/*.js', './controllers/*.js', './routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);
export default swaggerSpec;
