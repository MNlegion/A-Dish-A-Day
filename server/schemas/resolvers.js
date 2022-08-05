const { Tag, Recipe, Review, User } = require("../models");

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
        return User.find()
        .populate("favorite");
      },
      recipes: async () => {
        return Recipe.find();
      },
      recipe: async (parent, {recipeTitle}) => {
        return Tag.findOne({recipeTitle});
      },
      reviews: async () => {
        return Review.find();
      },
    }, 

    

  };

  module.exports = resolvers;