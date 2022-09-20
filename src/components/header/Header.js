import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-black rounded-bottom">
  <div class="container-fluid">
    
    <Link class="navbar-brand" to="/"><img className="header_icon logo_width" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"></img></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link text-white mx-3" to="/movies/now_playing">Current</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white mx-3" to="/movies/popular">Popular</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white mx-3" to="/movies/top_rated">Top Rated</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link text-white mx-3" to="/movies/upcoming">Upcoming</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


    </>
  )
}

export default Header
