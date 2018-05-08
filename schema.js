const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query{
    curso(id: ID): Curso
    cursos: [Curso]
    profesores: [Profesor]
    profesor(id: ID): Profesor
  }

  enum Genero{
    MASCULINO
    FEMENINO
  }

  type Profesor{
    id: ID!
    nombre: String!
    nacionalidad: String!
    genero: Genero!
    cursos: [Curso]
  }

  type Comentario{
    id: ID!
    nombre: String!
    cuerpo: String!
  }

  # Esto es un type de Curso
  type Curso{
    id: ID!
    titulo: String!
    descripcion: String
    profesor: Profesor
    rating: Float
    comentarios: [Comentario]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
