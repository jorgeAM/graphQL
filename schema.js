const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query{
    curso(id: ID): Curso
    cursos: [Curso]
  }

  type Curso{
    id: ID!
    titulo: String!
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
