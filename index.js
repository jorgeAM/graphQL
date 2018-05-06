const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost/graphql');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'No se pudo conectar'));
db.once('open', () => {
  console.log('conexión con mongoDB exitosa');
  app.listen(3000, () => console.log('Servidor en ejecución'));
});
