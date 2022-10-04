import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

const SearchResults = ({recipeArray}) => {
  return (
    <div>
    {" "}
    <div className="">
      <div className="">
        <h1 className="ml-5 text-left text-3xl mt-4">
          Search Results
        </h1>
      </div>
      <div className="flex flex-wrap mx-auto">
        {recipeArray
          ? recipeArray.map((recipe, index) => (
              <RecipeCard recipe={recipe} index={index} />
            ))
          : null}
      </div>
    </div>
  </div>
  )
}

export default SearchResults