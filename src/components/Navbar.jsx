import React from 'react';
import sake from '../assets/sake-2.png';
import SearchBar from "./Searchbar/Searchbar";

function Navbar({ setRestaurants }) {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 py-2 px-4 navbar-2">
      <div className="d-flex align-items-center">
        <img height="56" className="me-3" src={sake} alt="keyboard and matcha logo" />
        <h2>Sake Spots 🍶</h2>
      </div>
      <div className="d-flex align-items-center gap-5">
        <SearchBar setRestaurants={setRestaurants} />
        <div className="dropdown">
          <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Log out</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
