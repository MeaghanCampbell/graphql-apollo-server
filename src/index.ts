import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { typeDefs } = await import(`${__dirname}/schema.js`);
const db = await import(`${__dirname}/_db.js`)

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        reviews() {
            return db.reviews
        }

    },
};

// server setup
const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});

const { url } = await startStandaloneServer(server, {
    listen: { port:4000 }
})

console.log(`🚀  Server ready at: ${url}`)
