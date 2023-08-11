# Food- Reacipe-app####
  This is food recipe app. this app built using React, it help to fetch your favourite recipe from MealDBP API. 

  1. here you can search your favourite recipe using name in search bar
  2. you can also search recipe by alpha character using index
  3.Also you can search recipe by thier individual ID
  


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
.

### `App.js`
import Meal.js in App.js
render Meal in App.js
<Meal/>



Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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



Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `ReciperIndex.js`
create array to store recipe

const alpha=["A,"B",.......,"Z"]

map function to iterate over the Array
alpha.map(item=>{ //item variable store each item of the array
    return (

    )
})







## Tecnologies Used:

1. React: The app is built using React
2. useState:
the useState hook is used for managing component state
3. useEffect: the useEffect hook is used to handling side effects such as data fetching

Y


### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://fac
ebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
