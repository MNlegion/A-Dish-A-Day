import RecipeCard from "../../components/Recipe";
import React, {useState, useEffect} from 'react'
// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_RECIPES, QUERY_RECIPE_ID } from '../../utils/queries';
import SecondayNav from '../../components/SecondaryNav';
import recipeStyles from './recipes.module.css';

export default function RecipeSearch({ searchParams, setSearchParams }) {

    const [recipes, setRecipes] = useState([
      {title:"the title", ingredients: "ingredients", instructions: "instructions", author: "author", image:{src:"broken/image/link.jpg", alt:"broken iamge text"}}
    ]);

    const id = "62eeef9f31ff208513efd696";
    // GET RECIPE DATA FROM APOLLO
    const { data, loading, error } = useQuery(QUERY_ALL_RECIPES);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [search, setSearch] = useState('all');
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (!data) return
      setFilteredRecipes(data.recipes)
    }, [data])
    
    console.log(data);

    // useEffect(() => {
    //   if (!data) return
    //   let r = data.recipes;
    //   if (search !== "all") {
    //     r = data.recipes.filter(recipe => {
    //       return data.recipe.tag.tagName === search
    //     })
    //   }
    //   setFilteredRecipes(r)
      
    // }, [search, data])

  
    const handleChange = (event: SelectChangeEvent<typeof search>) => {
      setSearch(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };


    if (loading) return "loading"
    if (error) return <pre>{error.message}</pre>

    return (
      <div>
        <SecondayNav/>
        <FormGroup id="search">
          <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
            Filter Recipes
          </Button>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel  id="demo-controlled-open-select-label">Search</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={search}
              label="Search"
              onChange={handleChange}
            >
              <MenuItem value='all'>All</MenuItem>
              <MenuItem value='chicken'>Chicken</MenuItem>
              <MenuItem value='seafood'>Seafood</MenuItem>
              <MenuItem value='beef'>Beef</MenuItem>
              <MenuItem value='pork'>Pork</MenuItem>
              <MenuItem value='vegetarian'>Vegetarian</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
        <div className={recipeStyles.all}>
        {data.recipes.map((recipe, index) => {
          return <RecipeCard recipe={recipe} key={index} searchParams={searchParams} setSearchParam={setSearchParams} />
        })}
        </div>

      </div>
    );
  }

