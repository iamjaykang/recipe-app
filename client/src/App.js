import { useEffect, useState } from 'react';
import { RecipeSource } from './api/RecipeSource';
import './App.css';
import Banner from './components/Banner/Banner';
import Body from './components/Body/Body';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [randomMeal,setRandomMeal] = useState([])
  const [recipeArray,setRecipeArray] = useState([])
  const [query,setQuery] = useState('pasta')

  // const randomMeals = async () => {
  //   try {
  //     const random = await RecipeSource.get(
  //       `recipes/random?number=10&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
  //     );
  //     setRandomMeal(random.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const recipesApi = async () => {
    try {
      const recipes = await RecipeSource.get(
        `recipes/complexSearch?number=12&addRecipeInformation=true&query=${query}&instructionsRequired=true&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      setRecipeArray(recipes.data.results);
      console.log(recipes.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // randomMeals();
    recipesApi();
  }, []);


  return (
    <div className="App">
      <Header />
      <Navbar setQuery={setQuery}/>
      <body className='container pt-4 bg-gray-100 mx-auto'>
      <Banner />
      <Body />
      <Content category={query} recipeArray={recipeArray}/>
      </body>
    </div>
  );
}

export default App;
