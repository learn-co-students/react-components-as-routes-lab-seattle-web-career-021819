import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink to='/' exact />
      <NavLink to='/actors' exact />
      <NavLink to='/directors' exact />
      <NavLink to='/movies' exact />
    </div>
  )
}

export default NavBar
