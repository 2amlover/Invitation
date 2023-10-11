import React from 'react';

const PreShoot = () => {
  return (
    <div>
      <video width="350" height="220" controls>
        <source src="your_video_url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PreShoot;
