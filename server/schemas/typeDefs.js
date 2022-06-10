const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    memories: [Memory]!
    }

    type Memory {
        _id: ID
        memoryOwner: String!
        memoryText: String!
        keyword: String
        emotion: String!
        date: String!
        createdAt: String
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
        addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addMemory(memoryText: String!, emotion: String!, date: String!, keyword: String): Memory
        updateMemory(memoryId: ID!, emotion: String!): Memory
        removeMemory(memoryId: ID!): Memory
    }
`
module.exports = typeDefs