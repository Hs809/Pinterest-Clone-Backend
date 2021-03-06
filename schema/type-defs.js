var { gql } = require('apollo-server');

const typeDefs = gql(`
 
  type User {
    id: ID
    name: String
    email: String!
    password: String!
    savedPins: [Pin]
    myPins: [Pin]
  }
  type Pin {
    id: ID
    title: String!
    description: String!
    img: String!
    user: String
  }

  type Query {
    user: User!
    pins: [Pin]
    readPin (id: ID!): Pin
    userPins (user: String!): User
  }
  input CreatePinInput{
    title: String!
    description: String!
    img: String!
    user: String!
    id: ID
  }
  type Mutation{
    createPin (input: CreatePinInput!): Pin
    deletePin (id: ID!, user: String!): Pin
    savedPin (input: CreatePinInput!): Pin
    deleteSavedPin(id: ID!, user: String!): Pin
  }
`);

module.exports = { typeDefs };
