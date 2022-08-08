import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import detailStyles from './singlerecipe.module.css';
import ReviewForm from '../../components/ReviewForm';
import Review from '../../components/Review';

import { useQuery } from "@apollo/client";
import { QUERY_RECIPE_ID } from '../../utils/queries';

function SingleRecipe() {

    // const { recipeTitle, _id, description, ingredient, img, preparationStep } = {
    //     "recipeTitle" : "Chicken Parm",
    //     "description" : "This is a great chicken dish",
    //     "author" : "Emma",
    //     "img" : "https://placekitten.com/400/200",
    //     "ingredient" : ["chicken", "parmesan", "tomato sauce", "pasta", "basil", "mozarella"],
    //     "preparationStep" : ["do this", "to this second", "do this third"],
    //     "tag": [],
    //     "_id": 5
    // };

    const reviewData = [
        {
            "text": "wow this is such a great recipe I love it so much 5 stars",
            "username": "Emma",
            "starRating": 5
        },
        {
            "text": "wow this is such a great recipe I love it so much 5 stars",
            "username": "Emma",
            "starRating": 5
        },
        {
            "text": "wow this is such a great recipe I love it so much 5 stars",
            "username": "Emma",
            "starRating": 5
        }
    ];
      
    const URL = window.location.href;
    const selectedRecipeId = URL.substr(30);

    // query database for single recipe
    const { error, loading, data } = useQuery(QUERY_RECIPE_ID, {
        variables: { id: selectedRecipeId }
    });
        
    const { recipeTitle, _id, description, ingredient, img, preparationStep } = data?.recipe || [];
    console.log('RECIPE DATA', recipeTitle, _id);

    useEffect(() => {
        if (!data) return console.log('no data')
      }, [data])

    // implement state to keep track of which recipe has been selected to review
    const [currentRecipe, setCurrentRecipe] = useState({ title: `${recipeTitle}`, _id: `${_id}` });

    // implement state to set star rating
    const [value, setValue] = useState();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    if (loading) return "loading"
    if (error) return <pre>{error.message}</pre>  

    return (
        <section className={detailStyles.main}>
            <Header />
            <Grid className={detailStyles.container} container spacing={2}>

                {/* recipe title always takes up full 12 columns */}
                <Grid item xs={12}>
                    <Item>
                        {/* <Typography variant="h2">{recipe.recipeTitle}</Typography> 
                        <Typography variant="h3">{recipe.description}</Typography> */}
                        <h2>{recipeTitle}</h2>
                        <h3>{description}</h3>
                    </Item>
                </Grid>

                {/* recipe image */}
                <Grid item xs={12} md={6} lg={4}>
                    <Item>
                        <img src={img} alt="finished recipe"></img>
                    </Item>
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <Item>
                        <h4>Ingredients</h4>
                        <ul className={detailStyles.ingredients}>
                        {ingredient.map((ingredient, index) => {
                            return (
                                <li key={index}>{ingredient}</li>
                            )})}
                        </ul>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                    <Item className={detailStyles.stepContainer}>
                        <h4 className={detailStyles.stepHeader}>Instructions</h4>
                        <ul className={detailStyles.steps}>
                            {preparationStep.map((step, index) => {
                                return (
                                    <li key={index}>{step}</li>
                                )
                            })}
                        </ul>
                    </Item>
                </Grid>

                {/* REVIEW SECTION */}
                <Grid item xs={12} lg={4}>
                    <Item>
                        <ReviewForm
                            value={value}
                            setValue={setValue}
                            currentRecipe={currentRecipe}
                        ></ReviewForm>
                    </Item>
                </Grid>

                <Grid item xs={12} lg={8}>
                    <Item>
                        <h4>Reviews coming soon</h4>
                        {reviewData.map((review, index) => {
                            return (
                                <Review 
                                key={index}
                                text={review.text}
                                value={review.starRating}
                                user={review.username}
                                ></Review>             
                            )
                        })}
                    </Item>
                </Grid>

            </Grid>
            <Footer />
        </section>
    )
}

export default SingleRecipe;