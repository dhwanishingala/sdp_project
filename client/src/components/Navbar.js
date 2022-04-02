import React from 'react'
// import { Navlink } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link to="/" className='navbar-brand'>
						Bid-To-Buy
				</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <Link to="/" className='nav-link active'>
						Home
				</Link>
        </li>
        <li class="nav-item">
        <Link to="/upload" className='nav-link active'>
						Upload
				</Link>
        </li>
        <li class="nav-item">
        <Link to="/history" className='nav-link active'>
						History
				</Link>
        </li>
        <li class="nav-item dropdown">
        <Link to="/feedback" className='nav-link active'>
						Feedback
				</Link>

        </li>
        <li class="nav-item">
        <Link to="/about" className='nav-link active'>
						About Us
				</Link>
        </li>
      </ul>
      <form form class="d-flex">
        <input class="form-control me-2 " type="search" placeholder="Search by Name" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
       
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
           {/* <a class="nav-link active" href="/Login">Login</a> */}
        <Link to="/login" className='nav-item nav-link active'>
						Login
				</Link>
        </li>

        <li class="nav-item">
          {/* <a class="nav-link active" href="/Signup">SignUp</a> */}
           <Link to="/signup" className='nav-item nav-link active'>
						Signup
				</Link>
        </li>
      </ul>    
      </div>
  </div>
</nav>
    </>
  )
}

export default Navbar