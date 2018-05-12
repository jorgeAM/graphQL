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
    buscar: (_, args) => (
      [
        Curso.find({ _id: '5aefb9c61281aa6955b10c76' }),
        Profesor.find({ _id: '5aefb8cd1281aa6955b10c75' }),
      ]
    ),
  },
  ResultadoBusqueda: {
    //solo cuando se trabaja con union o interface
    __resolveType: (obj) => obj.nombre ? 'Profesor' : 'Curso',
  },
  Mutation: {
    profesorAdd: (_, args) => Profesor.create(args.profesor),
    profesorEdit: (_, args) => Profesor.findByIdAndUpdate(args.id, args.profesor),
    profesorDelete: (_, args) => Profesor.findByIdAndRemove(args.id),
  },
};

module.exports = resolvers;
