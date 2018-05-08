const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('../resolvers');
const Profesor = require('./Profesor');
const Curso = require('./Curso');

const rootQuery = `
  type Query{
    curso(id: ID): Curso
    cursos: [Curso]
    profesores: [Profesor]
    profesor(id: ID): Profesor
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Profesor, Curso],
  resolvers,
});

module.exports = schema;
