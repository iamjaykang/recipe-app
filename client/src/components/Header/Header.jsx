import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto mt-4">
      <header>
        <div className="flex flex-row">
          <div className="flex-1">
            <img src={logo} className='w-20 mx-auto'/>
            <span className="text-4xl">Food Recipe</span>
          </div>
          <div className="flex-1 my-auto">
            <p className="">Search</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
