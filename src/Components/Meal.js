import React from 'react';
import { useState, useEffect } from 'react';
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';



const Meal= ()=> {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();
    const[show,setShow]=useState(false);
    const[search,setSearch]=useState("")

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(evt)=>{
        if(evt.key=="Enter"){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

  return (
    <>
    <div className="main">
        <div className="heading">
            <h1> The Secret Ingerident Is<span> Cheese😊</span></h1>
            <h3> "People Who Give Their Food 🍜🍚, Give You Their Heart ❤️"</h3><br/>
            <h4>
            Search Your Favourite <span>Recipes 🍜</span> Here!
            </h4>

        </div>
        <div className="searchBox">
            <input type="search" className="search-bar" placeholder='tomato, potato...'
            onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>

        </div>
        <div className="container">
            {
                show ? <MealItem data={item}/>:"Recipe Not Found"
            }
           
           
      
        </div>
        <div className="indexContainer">
            <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>

        </div>

    </div>
    </>
  )
}

export default Meal