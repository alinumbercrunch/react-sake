import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import RestaurantList from './components/RestaurantList/RestaurantList';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <div className='app-frame'>
      <Navbar setRestaurants={setRestaurants} />
      <div className="app-body">
        <Sidebar />
        <RestaurantList restaurants={restaurants} />
      </div>
    </div>
  );
}

export default App;
