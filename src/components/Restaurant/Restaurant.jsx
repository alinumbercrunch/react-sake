// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

// /// Card example data ///
// picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
// title: "DDSK SAIGON KITCHEN",
// address: "ss, 135-0061, Tokyo",
// criteria: ["Power sockets", "Quiet"]

import "./Restaurant.css";
import React from 'react';


function Restaurant({ restaurant = {} }) {
  const { picture, title, address, criteria = [] } = restaurant;
  return (
    <div className="restaurant-card">
      <img src={picture} alt="" />
      <div>
        <div>
          <h5>{title}</h5>
            <p>
              {criteria.map(criterion => (
                <span key={criterion}>{criterion}</span>
              ))}
            </p>
          <a href="">Show the map 📍</a>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
