const env = require('../env.config');

module.exports = {
  mongodb: {
    connectTo: (database) => `mongodb+srv://gab121:${env.DB_PASSWORD}@appprueba.jibhv.mongodb.net/${database}?retryWrites=true&w=majority`
  }
}