const { AuthenticationError } = require('apollo-server-express');
const { User, Memory } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
// Need queries for user, users, memory, memories, me
        users: async () => {
            return User.find().populate('memories')
        },
        user: async (parent, {username}) => {
            return User.findOne({username}).populate('memories')
        },
        memories: async (parent, {username}) => {
            const params = username ? {username} : {};
            return Memory.find(params).stort({createdAt: -1});
        },
        memory: async (parents, {memoryId}) => {
            return Memory.findOne({_id: memoryId});
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('thoughts');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    },
    Mutation: {
//need mutations for adding users, logging in, adding/updating/removing memories.
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addMemory: async (parent, {memoryText, emotion, date}, context) => {
        if (context.user) {
            const memory = await Memory.create({
                memoryText,
                emotion,
                date,
                memoryOwner: context.user.username
            });
            await User.findOneAndUpdate(
                {_id: context.user.id},
                { $addToSet: {memories: memory._id}}
            );
            return memory
        }
        throw new AuthenticationError('You need to be logged in to the console!')
    },
    //This may need adjustment
    updateMemory: async (parent, {memoryId, memoryText, emotion}, context) => {
        if (context.user) {
            const memory = await Memory.findOneAndUpdate({
              _id: memoryId,
              memoryOwner: context.user.username,
            }, {
                $set: {memoryText, emotion}
            });
    
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $set: { memories: memory._id } }
            );
    
            return memory;
          }
          throw new AuthenticationError('You need to be logged in to the console!')
    },
    removeMemory: async (parent, {memoryId}, context) => {
        if (context.user) {
            const memory = await Memory.findOneAndDelete({
              _id: memoryId,
              memoryOwner: context.user.username,
            });
    
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { memories: thought._id } }
            );
    
            return memory;
          }
          throw new AuthenticationError('You need to be logged in to the console!');
    } 
    }
}

module.exports = resolvers