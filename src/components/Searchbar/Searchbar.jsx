import React, { useState, useEffect } from 'react';
import './Searchbar.css';

function Searchbar({ setRestaurants }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setLocalRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    const url = "https://gist.githubusercontent.com/alinumbercrunch/57d2c1821ebb8416629fe0db0fc4282d/raw/2c4a5cfc202537988ca996168d358ae90135f185/sake.json";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log fetched data
        setLocalRestaurants(data);
        setRestaurants(data); // Set initial data to parent
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [setRestaurants]);

  useEffect(() => {
    // Filter restaurants based on search term
    if (searchTerm) {
      const results = restaurants.filter(restaurant =>
        restaurant.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Filtered results:', results); // Log filtered results
      setFilteredRestaurants(results);
      setRestaurants(results); // Update parent with filtered results
    } else {
      setFilteredRestaurants([]);
      setRestaurants(restaurants); // Reset to original list if search term is empty
    }
  }, [searchTerm, restaurants, setRestaurants]);

  function handleUpKey(event) {
    setSearchTerm(event.currentTarget.value);
    console.log('Search term:', event.currentTarget.value); // Log search term
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar input-group">
        <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
        <input onKeyUp={handleUpKey} placeholder="Kamemi Sake Bar" type="text" className="form-control" />
      </div>
      {filteredRestaurants.length > 0 && (
        <div className="search-results-container">
          <ul className="list-group search-results">
            {filteredRestaurants.map((restaurant, index) => (
              <li key={index} className="list-group-item">
                {restaurant.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
