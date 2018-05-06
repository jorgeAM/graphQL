const mongoose = require('mongoose');

const cursoSchema = mongoose.Schema({
  titulo: String,
});

module.exports = mongoose.model('Course', cursoSchema);
