const { Schema, model } = require("mongoose");
//const { Tag } = require('../schemas/resolvers');
const tag = require("./Tag");

//ALL FIELD NAMES WILL BE SINGULAR
//<filename(lowercase)>Schema
const recipeSchema = new Schema(
  {
    recipeTitle: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
      trim: true,
    },
    description: {
      //contains mouthwatering prose for the dish
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
    },
    author: {
      type: String,
    },
    review: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    ],
    tag: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag"
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, //reminder virutals are like pseudofields
    },
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
