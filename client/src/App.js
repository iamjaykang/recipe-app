import { useEffect, useState } from 'react';
import { RecipeSource } from './api/RecipeSource';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [randomMeal,setRandomMeal] = useState([])

  // const randomMeals = async () => {
  //   try {
  //     const random = await RecipeSource.get(
  //       `recipes/random?number=1&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
  //     );
  //     setRandomMeal(random.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   randomMeals();
  // }, []);


  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
