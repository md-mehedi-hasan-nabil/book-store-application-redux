const { buildSchema } = require("graphql");

// construct a schema
const schema = buildSchema(`
    type Book {
        id: ID
        name: String
        author: String
        thumbnail: String
        price: Int
        rating: String
        featured: Boolean
    }

    type Query {
        hello: String
        getBooks: [Book]
    }

`)






module.exports = schema