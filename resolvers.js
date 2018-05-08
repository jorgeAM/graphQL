const Curso = require('./models/Curso');
const Profesor = require('./models/Profesor');
const Comentario = require('./models/Comentario');

const resolvers = {
  Query: {
    cursos: () => Curso.find().populate('comentarios'),
    curso: (rootValue, args) => Curso.findOne({ _id: args.id }).populate('comentarios'),
    profesores: () => Profesor.find().populate('cursos'),
    profesor: (rootValue, args) => Profesor.findOne({ _id: args.id }).populate('cursos'),
  },
  Curso: {
    profesor: (rootValue) => Profesor.findOne({ _id: rootValue.profesor }),
  },
};

module.exports = resolvers;
