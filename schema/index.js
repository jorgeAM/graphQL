const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('../resolvers');
const Profesor = require('./Profesor');
const Curso = require('./Curso');

const rootQuery = `
  union ResultadoBusqueda = Profesor | Curso

  type Query{
    curso(id: ID): Curso
    cursos: [Curso]
    profesores: [Profesor]
    profesor(id: ID): Profesor
    buscar(query: String!): [ResultadoBusqueda]
  }

  type Mutation{
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorEdit(id: ID!, profesor: ProfesorEditable): Profesor
    profesorDelete(id: ID!): Profesor
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Profesor, Curso],
  resolvers,
});

module.exports = schema;
