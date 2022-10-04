import React from 'react'
import starwars from "../assets/images/starwars-logo.png"

const Header = () => {
  return (
    <div>
        <img src={starwars} alt='star wars logo'/>

    </div>
  )
}

export default Header