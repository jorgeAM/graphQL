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

  # Para tener mejor control creamos un type Input
  input NuevoProfesor{
    nombre: String!
    genero: Genero
    nacionalidad: String!
  }

  input ProfesorEditable{
    nombre: String!
    genero: Genero
    nacionalidad: String!    
  }

`;
