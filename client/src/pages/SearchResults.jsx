import React, { useState } from "react";
import SearchResults from "../components/Content/SearchResults";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Search = ({
  setSearchInput,
  setQuery,
  query,
  recipeArray,
}) => {

  return (
    <div>
      {" "}
      <Header setSearchInput={setSearchInput} />
      <Navbar setQuery={setQuery} />
      <body className="container pt-4 bg-gray-100 mx-auto">
        <SearchResults category={query} recipeArray={recipeArray} />
      </body>
    </div>
  );
};

export default Search;
