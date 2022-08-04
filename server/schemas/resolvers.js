const { Tag, Recipe, User } = require("../models");

const { AuthenticationError } = require('apollo-server-express');




const resolvers = {
    Query: {
      tags: async () => {
        return Tag.find();
      },
      tag: async (parent, {tagName}) => {
        return Tag.findOne({tagName});
      },
      users: async () => {
        return User.find();
      },
      recipe: async () => {
        return Recipe.find();
      }
    },

    Mutation: {
      addTag: async (parent, args) => {
        const newTag = await Tag.create(args);
        return newTag;
      }
    }
  };

  module.exports = resolvers;