const { ApolloServer, gql, PubSub } = require('apollo-server');

const pubsub = new PubSub();
const COUNT_UP = 'COUNT_UP';

let count = 0;
setInterval(() => pubsub.publish(COUNT_UP, { count: count++ }), 1000);

const server = new ApolloServer({
  typeDefs: gql`
    type Subscription {
      count: Int
    }
    type Query {
      dummy: String
    }
  `,
  resolvers: {
    Subscription: {
      count: { subscribe: () => pubsub.asyncIterator(COUNT_UP) },
    },
  },
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
