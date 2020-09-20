const Director = require("../models/Director")
const Movie = require("../models/Movie")

module.exports = {
  Query: {
    director: (parent, { id }) => {
      return Director.findById(id)
    },
    directors: (parent, args) => {
      return Director.find()
    },
    movie: (parent, { id }) => {
      return Movie.findById(id)
    },
    movies: (parent, args) => {
      return Movie.find()
    },
  },
  Mutation: {
    addDirector: (parent, args) => {
      const director = new Director({ ...args })
      return director.save()
    },
    addMovie: (parent, args) => {
      const movie = new Movie({ ...args })
      return movie.save()
    },
  },
  Director: {
    movies: ({ id }, args) => {
      return Movie.find({ director: id })
    },
  },
  Movie: {
    director: ({ director }, args) => {
      return Director.findById(director)
    },
  },
}
