const express = require('express');
const graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

let fakeDatabase = {
  a: {
    id: 'a',
    name: 'Andrej'
  },
  j: {
    id: 'j',
    name: 'Johnny'
  }
};

//Define use type
let userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString }
  }
});

let queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: (_, { id }) => {
        return fakeDatabase[id];
      }
    }
  }
});

let schema = new graphql.GraphQLSchema({ query: queryType });

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000);
console.log(`Running GraphQL API server at localhost:4000/graphql`);
