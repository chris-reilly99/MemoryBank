const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    username: String
    email: String
    password: String
    memories: [Memory]!
    }

    type Memory {
        _id: ID
        memoryText: String
        emotion: String
        date: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        memories(username: String!): [Memory]
        memory(memoryId: ID!): Memory
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addMemory(memoryText: String!, emotion: String!, date: String!): Memory
        updateMemory(memoryId: ID!, emotion: String!): Memory
        removeMemory(memoryId: ID!): Memory
    }
`
module.exports = typeDefs