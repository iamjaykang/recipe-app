import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const Content = ({ category, recipeArray }) => {
  return (
    <div className="">
      <div className="">
        <h1 className="ml-40 text-left text-3xl mt-4">
          {category.charAt(0).toUpperCase() + category.slice(1)}
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
  );
};

export default Content;
