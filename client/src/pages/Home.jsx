import React from "react";
import Banner from "../components/Banner/Banner";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Home = ({
  setSearchInput,
  query,
  setQuery,
  randomMeals,
  recipeArray,
}) => {
  return (
    <div>
      {" "}
      <Header setSearchInput={setSearchInput} />
      <Navbar setQuery={setQuery} />
      <body className="container pt-4 bg-gray-100 mx-auto">
        <Banner randomMeals={randomMeals} />
        <Content category={query} recipeArray={recipeArray} />
      </body>
    </div>
  );
};

export default Home;
