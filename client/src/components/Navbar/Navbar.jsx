import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto bg-white'>
        <nav>
            <ul className='flex pl-36 gap-14 border-y py-4'>
                <li>Recipes</li>
                <li>Cuisine</li>
                <li>Type</li>
                <li>Choose for me</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar