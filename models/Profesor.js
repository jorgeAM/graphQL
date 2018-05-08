const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profesorSchema = mongoose.Schema({
  nombre: String,
  nacionalidad: String,
  genero: {
    type: String,
    enum: ['MASCULINO', 'FEMENINO'],
  },
  cursos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

module.exports = mongoose.model('Profesor', profesorSchema);
