import React, { useState } from "react";
import { meals } from "../../data/meals";

const Navbar = ({ setQuery }) => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  return (
    <div className="container mx-auto bg-white">
      <nav>
        <ul className="flex pl-36 gap-14 border-y py-4">
          <li onClick={handleDropDown}>Recipes</li>
          {dropDown ? (
            <div className="absolute mt-8 bg-white w-24">
              <ul className="">
                {meals.map((meal, index) => (
                  <li key={meal} onClick={() => setQuery(meal)} className="border-b">
                    {meal}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <li>Cuisine</li>
          <li>Type</li>
          <li>Choose for me</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
