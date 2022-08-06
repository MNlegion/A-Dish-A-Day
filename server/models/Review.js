const { Schema, model } = require('mongoose');
const { Schema, model } = require('mongoose');
const user = require("./User");


const ReviewSchema = new Schema(
    {
        rating: {
            type: Number,
            required: true            
        },
        reviewText: { 
            type: String,
            required: true
        },
       user_id: [
            {
              type: Schema.Types.ObjectId,
              ref: "User"
            }
          ]

    },
    {
        toJSON: {
            getters: true//reminder virutals are like pseudofields
        }
    }
);

const Review = model("Review", ReviewSchema);

module.exports = Review;
