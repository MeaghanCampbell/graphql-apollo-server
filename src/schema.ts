export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }
`
// this schema / typeDefs defines what the graph looks like - it is how apollo structures the graph
// different graphql types:
// int, float, strong, boolean, ID
// ! means it can't be null
// query is to define the entry points of the graph, they are required
// use [] for a list of strings