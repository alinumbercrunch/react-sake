import React from 'react';
import "./Sidebar.css";
import sake from '../../assets/sake-2.png';

function Sidebar() {
  // OPTIONAL: build the addRestaurant feature

  const criteria = ["Lively atmosphere", "Counter seats available", "Quiet", "Unique sake selection", "All-you-can-drink sake", "Knowledgeable staff", "Budget friendly", "Central location"];

  return (
    <div className="sidebar">
      <div>
        <h3>Share your favorite Sake place</h3>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="restaurant-title"><i className="fa-solid fa-whiskey-glass form-icons"></i></span>
            <input name="restaurant[title]" placeholder="Sake Library Omotesando" type="text" className="form-control" aria-describedby="restaurant-title" />
            </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="restaurant-address"><i className="fa-solid fa-location-dot form-icons"></i></span>
            <input name="restaurant[address]" placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002, Tokyo" aria-describedby="restaurant-address" type="address" className="form-control" />
          </div>
          <div className="mb-3">
            { criteria.map((criterion) => {
              return (
                <React.Fragment key={criterion}>
                  <input name="restaurant[criteria][]" type="checkbox" className="btn-check" id={criterion} autoComplete="off" value={criterion}/>
                  <label className="btn btn-outline-success btn-sm mx-1 mb-1" htmlFor={criterion}>{criterion}</label>
                </React.Fragment>
              );
            }) }
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="restaurant-picture"><i className="fa-solid fa-camera-retro form-icons"></i></span>
            <input name="restaurant[picture]" type="text" className="form-control" aria-describedby="restaurant-picture" placeholder='http://example.com/image.jpg'/>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Ready to kanpai</button>
          </div>
        </form>
      </div>
      <img src={sake} alt="keyboard and matcha logo" />
       <a href="https://www.flaticon.com/free-icons/sake" title="Sake icons">Sake icons created by Freepik - Flaticon</a>
    </div>
  );
}

export default Sidebar;
