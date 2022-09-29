import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from "../../images/random.jpeg";

const Banner = ({randomMeals}) => {
  return (
    <div>
    <img src={bannerImg} className="mx-auto" />
    <div className="bg-white text-left absolute left-[32%] ml-4 py-4 pl-4 top-1/4 translate-y-1/2 w-[392px]">
      <h3 className="text-2xl font-bold">Out of meal ideas?</h3>
      <div>
        <h4 className="text-xl">Random meal picker</h4>
        <p className="text-lg">Tired of deciding your next meal? Let us pick your next meal!</p>
      </div>
      <div className="absolute bg-[#be2a77] w-[230px] h-[40px] text-center rounded-sm pt-1.5">
        <Link className="" onClick={randomMeals} to="/random-recipes">
            <span className="text-white text-lg">10 random meal recipes</span>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Banner