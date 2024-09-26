import React from 'react';
import "./Sidebar.css";
import logo from '../../assets/logo_w_context2.png';

function Sidebar() {
  // OPTIONAL: build the addCafe feature

  const criteria = ["Stable Wi-Fi", "Power sockets", "Quiet", "Coffee", "Food"];

  return (
    <div className="sidebar">
      <div>
        <h3>Share your work spot</h3>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="cafe-title"><i className="fa-solid fa-mug-saucer form-icons"></i></span>
            <input name="cafe[title]" placeholder="FabCafe Shibuya" type="text" className="form-control" aria-describedby="cafe-title" />
            </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="cafe-address"><i className="fa-solid fa-location-dot form-icons"></i></span>
            <input name="cafe[address]" placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002, Tokyo" aria-describedby="cafe-address" type="address" className="form-control" />
          </div>
          <div className="mb-3"> 
            { criteria.map((criterion) => {
              return ( 
                <React.Fragment key={criterion}>
                  <input name="cafe[criteria][]" type="checkbox" className="btn-check" id={criterion} autoComplete="off" value={criterion}/>
                  <label className="btn btn-outline-success btn-sm mx-1 mb-1" htmlFor={criterion}>{criterion}</label>
                </React.Fragment>
              );
            }) }
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="cafe-picture"><i className="fa-solid fa-camera-retro form-icons"></i></span>
            <input name="cafe[picture]" type="text" className="form-control" aria-describedby="cafe-picture" placeholder='http://example.com/image.jpg'/>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Ready to brew</button>
          </div>
        </form>
      </div>
      <img src={logo} alt="keyboard and matcha logo" />
    </div>
  );
}

export default Sidebar;