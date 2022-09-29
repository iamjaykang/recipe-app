import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecipeSource } from "./api/RecipeSource";
import "./App.css";
import Home from "./pages/Home";
import RandomRecipes from "./pages/RandomRecipes";

function App() {
  const [query, setQuery] = useState("pasta");
  const [randomMeal, setRandomMeal] = useState([]);

  const randomMeals = async () => {
    try {
      const random = await RecipeSource.get(
        `recipes/random?number=12&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      setRandomMeal(random.data.recipes);
      console.log(random.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home randomMeals={randomMeals} query={query} setQuery={setQuery}/>} />
          <Route exact path="/random-recipes" element={<RandomRecipes randomMeal={randomMeal} query={query} setQuery={setQuery}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
