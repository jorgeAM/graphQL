const Curso = require('./models/Curso');
const Profesor = require('./models/Profesor');
const Comentario = require('./models/Comentario');

const resolvers = {
  Query: {
    cursos: () => Curso.find().populate('comentarios profesor'),
    curso: (rootValue, args) => Curso.findOne({ _id: args.id }).populate('comentarios profesor'),
    profesores: () => Profesor.find().populate('cursos'),
    profesor: (rootValue, args) => Profesor.findOne({ _id: args.id }).populate('cursos'),
  },
};

module.exports = resolvers;
