const { ApolloServer } = require("apollo-server-express")
const express = require("express")
const mongoose = require("mongoose")
const typeDefs = require("./typeDefs/types")
const resolvers = require("./resolvers/resolvers")
require("dotenv").config()

const { PORT = 4000, URI_PASS, DB_NAME, NODE_ENV = "development" } = process.env

;(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Vasyl:${URI_PASS}@cluster0.osxef.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("MongoDB started!")
    )

    const app = express()

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: NODE_ENV !== "production",
    })

    server.applyMiddleware({ app })

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  } catch (error) {
    console.log(error.message)
  }
})()
