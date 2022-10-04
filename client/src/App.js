import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecipeSource } from "./api/RecipeSource";
import "./App.css";
import Home from "./pages/Home";
import RandomRecipes from "./pages/RandomRecipes";
import SearchResults from "./pages/SearchResults";

function App() {
  const [query, setQuery] = useState("pasta");
  const [randomMeal, setRandomMeal] = useState([]);
  const [recipeArray, setRecipeArray] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const randomMeals = async () => {
    try {
      const random = await RecipeSource.get(
        `recipes/random?number=12&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      setRandomMeal(random.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  const recipesApi = async () => {
    try {
      const recipes = await RecipeSource.get(
        `recipes/complexSearch?number=12&addRecipeInformation=true&query=${query}&instructionsRequired=true&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      setRecipeArray(recipes.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchApi = async () => {
    try {
      const search = await RecipeSource.get(
        `recipes/complexSearch?number=12&addRecipeInformation=true&query=${searchInput}&instructionsRequired=true&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      setSearchResults(search.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    recipesApi();
  }, [query]);

  useEffect(() => {
    searchApi();
  }, [searchInput]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                setSearchInput={setSearchInput}
                randomMeals={randomMeals}
                query={query}
                setQuery={setQuery}
                recipeArray={recipeArray}
              />
            }
          />
          <Route
            exact
            path="/random-recipes"
            element={
              <RandomRecipes
                setSearchInput={setSearchInput}
                randomMeal={randomMeal}
                query={query}
                setQuery={setQuery}
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <SearchResults
                setSearchInput={setSearchInput}
                query={query}
                setQuery={setQuery}
                recipeArray={searchResults}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
