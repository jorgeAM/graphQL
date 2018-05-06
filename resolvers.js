const Curso = require('./models/Curso');

const resolvers = {
  Query: {
    cursos: () => Curso.find(),
    curso: (rootValue, args) => Curso.findOne({ _id: args.id }),
  },
};

module.exports = resolvers;
