import React from "react";
import MusicImage from "../../../../assets/reception.png";

const Reception = () => {
  const imageSize = {
    maxHeight: "160px", // Set the maximum height (adjust this value as needed)
  };

  return (
    <div>
      <img src={MusicImage} alt="" style={imageSize} width={320}/>
      <div className="card border-warning mb-2 mt-2 rounded-0" style={{ maxWidth: '20rem', marginLeft: '18px' }}>
      <div className="card-body text-start p-2">
        <h5 className="names">Reception</h5>
        <p className="card-text mb-1">October 18, 2023, Thursday</p>
        <p className="card-text mb-1">06:30 PM</p>
        <p className="card-text mb-2">Venue: Groom's Residence</p>
        <button className="button">View Map</button>
      </div>
    </div>
    </div>
  );
};

export default Reception;