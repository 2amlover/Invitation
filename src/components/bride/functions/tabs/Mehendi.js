import React from "react";
import MehendiImage from "../../../../assets/mehendi.png";

const Mehendi = () => {
  const imageSize = {
    maxHeight: "190px", // Set the maximum height (adjust this value as needed)
  };

  return (
    <div>
      <img src={MehendiImage} alt="" style={imageSize} />
      <div className="card border-warning mb-2 mt-2 rounded-0" style={{ maxWidth: '18rem', marginLeft: '17px' }}>
      <div className="card-body text-start p-2">
        <h5 className="names">Mehendi</h5>
        <p className="card-text mb-1">October 16, 2023, Wednesday</p>
        <p className="card-text mb-1">04:30 AM</p>
        <p className="card-text mb-2">Venue: Groom's Residence</p>
        <button className="button">View Map</button>
      </div>
    </div>
    </div>
  );
};

export default Mehendi;