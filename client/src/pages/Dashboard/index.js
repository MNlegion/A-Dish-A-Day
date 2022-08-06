import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import dashStyles from './dashboard.module.css';
import SecondaryNav from '../../components/SecondaryNav';
import Footer from '../../components/Footer';
import FavoriteRecipe from '../../components/FavoriteRecipe';

import Review from '../../components/Review';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../../utils/queries';

const Dashboard = () => {

    const { loading, data } = useQuery(QUERY_RECIPES);
    const recipes = data?.recipes || [];
    
    // const recipes = [
    //     {
    //         _id: 1,
    //         recipeTitle: "Chicken Parm",
    //         description: "This is a great chicken dish",
    //         author: "Emma",
    //         img: "https://placekitten.com/400/200",
    //         ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
    //         preprationStep: ["1: do this", "2: to this second", "3: do this third"],
    //         tag: ["Chicken"]
    //     },
    //     {
    //         _id: 2,
    //         recipeTitle: "Chicken Parm",
    //         description: "This is a great chicken dish",
    //         author: "Emma",
    //         img: "https://placekitten.com/400/200",
    //         ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
    //         preprationStep: ["1: do this", "2: to this second", "3: do this third"],
    //         tag: ["Chicken"]
    //     },
    //     {
    //         _id: 3,
    //         recipeTitle: "Chicken Parm",
    //         description: "This is a great chicken dish",
    //         author: "Emma",
    //         img: "https://placekitten.com/400/200",
    //         ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
    //         preprationStep: ["1: do this", "2: to this second", "3: do this third"],
    //         tag: ["Chicken"]
    //     }
    // ];

    // implement state to keep track of which recipe has been selected to review
    const [currentRecipe, setCurrentRecipe] = useState({ title: '', _id: '' });

    // implement state to set star rating
    const [value, setValue] = useState();

    return (
        <div className={dashStyles.test}>
            <SecondaryNav></SecondaryNav>
            <h2>Dashboard</h2>
                <main className={dashStyles.main}>

                        {/* Recent recipes */}
                        <section className={dashStyles.recipeContainer}>
                            {recipes.map((recipe, index) => {
                                return (
                                    <FavoriteRecipe
                                    key={index}
                                    source={recipe.img}
                                    title={recipe.recipeTitle}
                                    _id={recipe._id}
                                    author={recipe.author}
                                    description={recipe.description}
                                    currentRecipe={currentRecipe}
                                    setCurrentRecipe={setCurrentRecipe}
                                    >
                                    </FavoriteRecipe>
                                )
                            })}
                                
                        </section>

                        {/* Review section */}
                        <section className={dashStyles.formContainer} >
                            <Review
                                value={value}
                                setValue={setValue}
                                currentRecipe={currentRecipe}
                            ></Review>
                        </section>
                </main>
            <Footer />
        </div>
    )
}

export default Dashboard;