module.exports = `
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
`;
