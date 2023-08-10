import React from "react";

// create array to store recipe 
const RecipeIndex =({alphaIndex})=>{
    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var num=0;
    return(
        <>
        {
            //MAp function to iterate over Array
            //item variable store each item of the array
            alpha.map(item=>{
                return(
                    <div className="numBox" key={num++} onClick={()=>alphaIndex(item)}>
                        <h3>{item}</h3>

                    </div>
                )
            })
        }
        </>
    )
}
export default RecipeIndex;