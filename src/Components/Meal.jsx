import React from 'react'
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';

const Meal= ()=> {
  return (
    <>
    <div className="main">
        <div className="heading">
            <h1>Search Your Favourite Recipes Here!</h1>
            <h3> "The Secret Ingerident Is Cheese"</h3>
            <h4>People who give their food, give you their heart</h4>

        </div>
        <div className="searchBox">
            <input type="search" className="search-bar"/>

        </div>
        <div className="container">
            <MealItem/>
            <MealItem/>
            <MealItem/>
            <MealItem/>
            <MealItem/>
            <MealItem/>
      
        </div>
        <div className="indexContainer">
            <RecipeIndex/>

        </div>

    </div>
    </>
  )
}

export default Meal