import React  from "react";

const MealItem =({data})=> {
    console.log(data)
    return(
        <>
        {
            (!data) ? "Recipe Not Found": data.map(item=>{
                return (
                    <div className="card">
          <img
           src={item.strMealThumb}
           
            alt="" />  
            <h3>{item.strMeal}</h3>

        </div>

                )
            })
        }
        


        </>
    )
}
export default MealItem;