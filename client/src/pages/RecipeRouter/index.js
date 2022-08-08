import React from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import Dashboard from '../Dashboard';
import RecipeSearch from '../AllRecipes';
import SingleRecipe from '../SingleRecipe';
import NoMatch from '..//NoMatch';



function RecipeRouter() {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <Routes>
          <Route 
            path="/dashboard"
            element={<Dashboard/>}
          />
          <Route 
            path="/allrecipes"
            element={<RecipeSearch
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />}
          />
          <Route 
            path="/*"
            element={<SingleRecipe />}
          />
          <Route 
            path="*"
            element={<NoMatch />}
          />
        </Routes>
    )
}

export default RecipeRouter;