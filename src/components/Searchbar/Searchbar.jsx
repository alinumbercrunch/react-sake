// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=

import React from 'react';
import './Searchbar.css';

function Searchbar() {

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input placeholder="Starbucks" type="text" className="form-control" />
    </div>
  );
}

export default Searchbar;