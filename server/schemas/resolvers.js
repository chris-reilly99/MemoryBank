const { AuthenticationError } = require('apollo-server-express');
const { User, Memory } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
// Need queries for user, users, memory, memories, me
    },
    Mutation: {
//need mutations for adding users, logging in, adding/updating/removing memories.
    }
}

module.exports = resolvers