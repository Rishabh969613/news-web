import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = ({ onCategoryChange }) => {
  return (
    <>
      {/* <header>
        <div className="logo">
          <h1>NewsSite</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            {/* <li><a href="#">World</a></li>
                <li><a href="#">Politics</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Entertainment</a></li> */}
          {/*</ul>
        </nav>
        <div class="search-bar">
          <input type="text" placeholder="Search News..." />
          <button>Search</button>
          <Link to='/Signup'>
          <button>Sign up</button>
          </Link>
        </div>
      </header> */}

    
    <header>
    <div className="logo">DailyScope.</div>
    <nav>
      <ul>
        <li id="home"><Link to="/">Home</Link></li> 
        <li onClick={() => onCategoryChange("general")}>General</li>
        <li onClick={() => onCategoryChange("sports")}>Sports</li>
        <li onClick={() => onCategoryChange("entertainment")}>Entertainment</li>
        <li onClick={() => onCategoryChange("health")}>Science</li>
        <li onClick={() => onCategoryChange("technology")}>Tech</li>
      </ul>
    </nav>
    <div className="profile">
      <input type="search" placeholder="Search..." />
       <Link to='/Signup'> 
      <button id="signup-btn">Signup</button>
       </Link> 
       {/* <img src="https://via.placeholder.com/30" alt="User" />  */}
    </div>
  </header>
  
    </>
  )
}

export default Navbar