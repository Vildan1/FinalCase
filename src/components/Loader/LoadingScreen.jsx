import React from 'react';
import './Loading.css';

const LoadingScreen = () => {
  
  return (
    <div className="loading-screen">
      <div className="loading-img-container">
        <img className="imgLoading" src="https://cdn.dribbble.com/users/1021976/screenshots/4551725/dribbble.gif" alt="Loading..." />
        <p>May the Force be with you...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
