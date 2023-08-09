import React from "react";
import {useParams} from "react-router-dom";

const RecipeInfo=()=>{
    const {MealId}=useParams();
    if(MealId!="")
    {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.meals[0]);
        })
    }
    return(
        <>
            
        </>
    )
}
export default RecipeInfo;