// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
//QUESTION: tags are associated with recipes, but they must be queried. If only ever referenced through an individual recipe, how access tags by themselves (for selections ie buttons)?
// leaving out favorites for now

const typeDefs = gql`
    type Query {
        tags: [Tag]
        tag(tagName: String!): Tag
        users: [User]
        recipes: [Recipe]
<<<<<<< HEAD
        recipe(recipeTitle: String!): Recipe
        reviews: [Review]
=======
        recipe(_id: String!): Recipe
>>>>>>> 554f803d8f8653332041b4c14e578f083fc3ecd6
    }


    type Tag {
        tagName: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        favorite: [Recipe]
    }
    
    type Review {
        _id: ID
        text: String
       
    }

    type Recipe {
<<<<<<< HEAD
        _id: ID
=======
        _id: String
>>>>>>> 554f803d8f8653332041b4c14e578f083fc3ecd6
        recipeTitle: String
        description: String
        author: String
        reviews: [Review]
        tags: [Tag]
        img: String
        
        
    }
    
   
`;
// export the typeDefs
module.exports = typeDefs;