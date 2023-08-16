const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")
const root = require("./graphql/resolvers")
const schema = require("./graphql/schema")

const port = process.env.PORT || 4000

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
