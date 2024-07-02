// Spinner.js
import React from 'react';
import { ThreeDots, Audio, DNA, ThreeCircles } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
    </div>
  );
};

export default Spinner;
