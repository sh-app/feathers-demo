'use strict';
const game = require('./game');
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');

module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: false
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(user);
app.set('models', sequelize.models);
Object.keys(sequelize.models).forEach(function(modelName) {
  if ("associate" in sequelize.models[modelName]) {
    sequelize.models[modelName].associate();
  }
});

sequelize.sync();
};
