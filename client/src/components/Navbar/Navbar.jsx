import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <li onClick={handleDropDown} className='cursor-pointer'>Recipes</li>
          {dropDown ? (
            <div className="absolute mt-10 left-32 bg-white z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="cursor-pointer text-sm text-gray-700 dark:text-gray-200">
                {meals.map((meal, index) => (
                  <li key={meal} onClick={() => setQuery(meal)} className="block py-2 px-4 first:rounded-t last:rounded-b hover:bg-gray-100 hover:font-bold dark:hover:bg-gray-600 dark:hover:text-white">
                    <Link to='/'>{meal.charAt(0).toUpperCase() + meal.slice(1)}</Link>
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
