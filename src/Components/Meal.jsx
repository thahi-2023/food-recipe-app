import React from 'react';
import { useState, useEffect } from 'react';
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';


const Meal= ()=> {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();
    const[show,setShow]=useState(false);

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url])
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
            {
                show ? <MealItem data={item}/>:"Recipe Not Found"
            }
           
           
      
        </div>
        <div className="indexContainer">
            <RecipeIndex/>

        </div>

    </div>
    </>
  )
}

export default Meal