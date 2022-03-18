import React from 'react'
// import { Navlink } from "react-router-dom";
function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Bid-To-Buy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href='/upload'>Upload</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/history">History</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active" href="/feedback">Feedback</a>
          {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/about">About Us</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2 " type="search" placeholder="Search by Name" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <li class="nav-item">
          <a class="nav-link active" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/signup">SignUp</a>
        </li>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar