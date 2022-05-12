import React from "react";
import "./navbar.css";
import {NavLink}from "react-router-dom";


function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand pl-6 " to="/"><img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/man-technologist_1f468-200d-1f4bb.png"className="cwus" alt="pc"/><span className="name"> Crack With Us!</span> </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ">
        <NavLink class="nav-link active" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/aboutus">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/code">DSA</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/login">Login</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/signup">Registeration</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
}

export default Navbar;
