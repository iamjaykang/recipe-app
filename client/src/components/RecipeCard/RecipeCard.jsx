import React from "react";

const RecipeCard = ({ recipe, index }) => {
  return (
    <div className="mx-auto">
      <div key={index} className={`recipe-card${index} bg-white m-4 w-80 h-96 rounded-lg`}>
        <div>
          <img src={recipe.image} className="mx-auto w-80 rounded-t-lg" />
        </div>
        <div>
          <h1 className="font-bold text-xl">{recipe.title}</h1>
        </div>
        <div>
          <h2 className="font-bold text-lg text-left ml-2">Great For</h2>
          <div className="flex ml-2 gap-4 flex-wrap mt-4">
            {recipe.dishTypes.map((item) => (
              <div className="bg-gray-100 px-4 text-sm font-bold rounded-lg">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
