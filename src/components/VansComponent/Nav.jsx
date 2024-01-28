import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
    <div className="logo">
        <Link to={"/"}><h1>#VANLIFE</h1> </Link>
    </div>
    <div className="nav-links">
        <Link to={"/about"}>Amout</Link>
        <Link to={"/vans"}>Van</Link>
    </div>
</nav>
  )
}

export default Nav