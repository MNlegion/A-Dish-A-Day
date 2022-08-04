import RecipeCard from "../../components/Recipe";
import React from 'react'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';




export default function recipeSearch() {
    const [search, setSearch] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);
  
    // const handleChange = (event: SelectChangeEvent<typeof search>) => {
    //   setAge(event.target.value);
    // };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <div>
        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
          Open the select
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">Search</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={10}>Chicken</MenuItem>
            <MenuItem value={20}>Seafood</MenuItem>
            <MenuItem value={30}>Beef</MenuItem>
            <MenuItem value={30}>Pork</MenuItem>
            <MenuItem value={30}>Vegetarian</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }




















const index = () => {

    const [recipes, setRecipes] = React.useState([]);
    //const recipes = [
    //    {title, ingredients, instructions, author, imageSrc}
    //];
    // Function to fetch data from graphql
    // use setRecipes to set the returned data






    // function to search
    // when someone types in the form, filter the recipes and set them



  return (
    recipes.map((recipe, index) => {
        <RecipeCard recipe={recipe} key={index} />
    }
    
  )
)}

// export default index