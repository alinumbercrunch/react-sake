import "./RestaurantList.css";
import React from 'react';
import Restaurant from "../Restaurant/Restaurant";

function RestaurantList({restaurants}) {
  return (
    <div className="restaurant-list">
      { restaurants.map( restaurant => <Restaurant restaurant={restaurant} key={restaurant.title}/>)}
    </div>
  );
}

export default RestaurantList;
