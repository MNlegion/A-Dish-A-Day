import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
  query Recipes {
    recipes {
      _id
      recipeTitle
      description
      author
      img
    }
  }
`;






//query all recipes from AllRecipes
export const QUERY_ALL_RECIPES = gql`
{
  recipes {
    _id
    recipeTitle
    description
    author
    img
    ingredient
    preparationStep
    tag {
      tagName
    }
  }
}
`
//query recipe by id
export const QUERY_RECIPE_ID = gql`
query Recipe($id: String!) {
  recipe(_id: $id) {
    recipeTitle
    description
    author
    img
    ingredient
    preparationStep
  }
}
`