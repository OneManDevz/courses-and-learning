const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql');

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    street: { type: GraphQLString },
    streetNumber: { type: GraphQLInt }
  })
});

const AddressInputType = new GraphQLInputObjectType({
  name: 'AddressInput',
  fields: () => ({
    street: { type: GraphQLString },
    streetNumber: { type: GraphQLInt }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    address: { type: AddressType },
    posts: { type: new GraphQLList(PostType) },
    followers: { type: new GraphQLList(UserType) }
  })
});

//Root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return axios
          .get('http://localhost:3000/users/' + args.id)
          .then(res => res.data);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/users').then(res => res.data);
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: {
          type: AddressInputType
        }
      },
      resolve(parentValue, args) {
        return axios
          .post('http://localhost:3000/users', {
            name: args.name,
            address: args.address
          })
          .then(res => res.data);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, args) {
        return axios
          .delete('http://localhost:3000/users/' + args.id)
          .then(res => res.data);
      }
    },
    editUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, args) {
        return axios
          .patch('http://localhost:3000/users/' + args.id, args)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation });
