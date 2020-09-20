const { gql } = require("apollo-server-express")

module.exports = gql`
  type Director {
    id: ID!
    name: String!
    age: Int!
    gender: String!
    movies: [Movie!]!
  }
  type Movie {
    id: ID!
    name: String!
    genre: String!
    price: Int!
    description: String!
    director: Director!
  }
  type Query {
    director(id: ID!): Director!
    directors: [Director!]!
    movie(id: ID!): Movie!
    movies: [Movie!]!
  }
  type Mutation {
    addDirector(name: String!, age: Int!, gender: String!): Director!
    addMovie(
      name: String!
      price: Int!
      genre: String!
      description: String!
      director: ID!
    ): Movie!
    updateDirector(
      id: ID!
      name: String!
      age: Int!
      gender: String!
    ): Director!
    updateMovie(
      id: ID!
      name: String!
      price: Int!
      genre: String!
      description: String!
    ): Director!
    deleteDirecor(id: ID!): Director!
    deleteMovie(id: ID!): Movie!
  }
`
