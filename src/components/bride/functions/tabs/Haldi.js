import React from "react";
import HaldiImage from "../../../../assets/haldi.png";

const Haldi = () => {
  const imageSize = {
    maxHeight: "170px", // Set the maximum height (adjust this value as needed)
  };

  return (
    <div>
      <img src={HaldiImage} alt="" style={imageSize} width={320}/>
      <div className="card border-warning mb-2 mt-2 rounded-0" style={{ maxWidth: '20rem', marginLeft: '18px' }}>
      <div className="card-body text-start p-2">
        <h5 className="names">Haldi</h5>
        <p className="card-text mb-1">October 16, 2023, Wednesday</p>
        <p className="card-text mb-1">09:30 AM</p>
        <p className="card-text mb-2">Venue: Groom's Residence</p>
        <button className="button">View Map</button>
      </div>
    </div>
    </div>
  );
};

export default Haldi;