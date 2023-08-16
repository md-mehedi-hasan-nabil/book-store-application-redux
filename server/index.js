const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

const port = process.env.PORT || 4000

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return "Hello world!"
    },
}

const app = express()
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)
app.listen(port, function () {
    console.log("Running a GraphQL API server at http://localhost:4000/graphql")
})
