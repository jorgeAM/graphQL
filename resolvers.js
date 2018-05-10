const Curso = require('./models/Curso');
const Profesor = require('./models/Profesor');
const Comentario = require('./models/Comentario');

const resolvers = {
  Query: {
    cursos: () => Curso.find().populate({
      path: 'comentarios profesor',
      populate: { path: 'cursos' },
    }),
    curso: (rootValue, args) => Curso.findOne({ _id: args.id }).populate({
      path: 'comentarios profesor',
      populate: { path: 'cursos' },
    }),
    profesores: () => Profesor.find().populate({
      path: 'cursos',
      populate: { path: 'comentarios' },
    }),
    profesor: (rootValue, args) => Profesor.findOne({ _id: args.id }).populate({
      path: 'cursos',
      populate: { path: 'comentarios' },
    }),
  },

  Mutation: {
    profesorAdd: (_, args) => Profesor.create(args.profesor),
    profesorEdit: (_, args) => Profesor.findByIdAndUpdate(args.id, args.profesor),
  },
};

module.exports = resolvers;
