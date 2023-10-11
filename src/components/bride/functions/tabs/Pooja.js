import React from "react";
import PoojaImage from "../../../../assets/pooja.png";

const Pooja = () => {
  const imageSize = {
    maxHeight: "190px", // Set the maximum height (adjust this value as needed)
  };

  return (
    <div>
      <img src={PoojaImage} alt="" style={imageSize} width={320}/>
      <div className="card border-warning mb-2 mt-2 rounded-0" style={{ maxWidth: '20rem', marginLeft: '18px' }}>
      <div className="card-body text-start p-2" >
        <h5 className="names">Pooja</h5>
        <p className="card-text mb-1">October 15, 2023,Tuesday</p>
        <p className="card-text mb-1">11:30 AM</p>
        <p className="card-text mb-2">Venue: Groom's Residence</p>
        <button className="button">View Map</button>
      </div>
    </div>
    </div>
  );
};

export default Pooja;