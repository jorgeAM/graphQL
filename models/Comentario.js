const mongoose = require('mongoose');

const comentarioSchema = mongoose.Schema({
  nombre: String,
  cuerpo: String,
});

module.exports = mongoose.model('Comment', comentarioSchema);
