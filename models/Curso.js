const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cursoSchema = mongoose.Schema({
  titulo: String,
  descripcion: String,
  profesor: {
    type: Schema.Types.ObjectId,
    ref: 'Profesor',
  },
  rating: {
    type: Schema.Types.Decimal128,
  },
  comentarios: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

module.exports = mongoose.model('Course', cursoSchema);
