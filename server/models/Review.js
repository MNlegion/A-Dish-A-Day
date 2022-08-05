const { Schema, model } = require('mongoose');
const user = require("./User");


const ReviewSchema = new Schema(
    {
        text: { 
            type: String,
            unique: false,
            required: true
        },
       user: [
            {
              type: Schema.Types.ObjectId,
              ref: "User"
            }
          ],

    },
    {
        toJSON: {
            getters: true//reminder virutals are like pseudofields
        }
    }
);

const Review = model("Review", ReviewSchema);

module.exports = Review;