module.exports = `
  # Esto es un type de Curso
  type Curso{
    id: ID!
    titulo: String!
    descripcion: String
    profesor: Profesor
    rating: Float
    comentarios: [Comentario]
  }

  type Comentario{
    id: ID!
    nombre: String!
    cuerpo: String!
  }
`;
