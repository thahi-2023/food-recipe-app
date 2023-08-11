# Food- Reacipe-app####

### REACT PROJECT

  This is food recipe app. this app built using React, it help to fetch your favourite recipe from MealDBP API. 

  1. here you can search your favourite recipe using name in search bar
  2. you can also search recipe by alpha character using index
  3.Also you can search recipe by thier individual ID

  
  ### Installation

  1. make sure to installed Node.js and npm on your system
  2. Clone the project repositary or create a new project folder
  3. Navigate to the project folder in your terminal
  4.run npm install to install the project dependencies
  5. run npm start to strat ti to go developement server
  6. open your browser and navigate

  
## Tecnologies Used:


1. React: The app is built using React
2. useState:
the useState hook is used for managing component state
3. useEffect: the useEffect hook is used to handling side effects such as data fetching
4. Fetch API: the Fetch Api is used to make network requests to external APIs.
5. MealDP API:the App interct with the MealDP platform to access video and lmage detection service.

REACT
HTML
CSS
JAVASCRIPT
LOCALSTORAGE


## Approach Taken 

src--->Components---> Meal.jsx

created a react components called Meal.js

const Meal=()=>{
    return(
        <>
        </>
    )
}
export default Meal;


## Header
created header :


In the project directory, you can run:

### `search bar`
  create search attribute 

### card###

   here you can see you recipe image, whe you select it takes into the another page where you can see the ingredient, direction and video if available  
.

### `App.js`
import Meal.js in App.js
render Meal in App.js
<Meal/>


### MealItem.jsx:

### API:
 we are fetching Api using meal IDB 
 https://www.themealdb.com/api.php

 we are fetching data from search meal by name :

 we render this MealItem in Meal.jsx
 <MealItem/>





### `Style.css`
Upload google font from  google
Bona Nova: google font:


### `ReciperIndex.js`

 create array to store recipe

  const alpha=["A,"B",.......,"Z"]

  map function to iterate over the Array
  alpha.map(item=>{ //item variable store each item of the array
    return (

    )
})

### unsoleved Problem

1. More robust error handling could be implemented for  ApI request 
2. Consider potential Cors issue when making API requests
3. not  all youtube  video are working


















