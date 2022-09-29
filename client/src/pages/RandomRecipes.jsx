import React from 'react'
import Body from '../components/Body/Body'
import RandomContent from '../components/Content/RandomContent'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

const RandomRecipes = ({query, setQuery, randomMeal}) => {
  return (
    <div>
    {" "}
    <Header />
    <Navbar setQuery={setQuery} />
    <body className="container pt-4 bg-gray-100 mx-auto">
      <Body />
      <RandomContent category={query} recipeArray={randomMeal}/>
    </body>
  </div>
  )
}

export default RandomRecipes