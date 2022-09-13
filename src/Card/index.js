import React from "react";
import "../App.css";

export const Card = () => {
  return (
    <div className="Card">
      <div className="MainInfo">
        <img
          className="Icon"
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="icon"
        />
        <div className="Title">NewYork</div>
        <div className="Description">Cloudy</div>
        <div className="Temperature">20</div>
      </div>
      <div className="Information">
        <div>Humidity: 15</div>
        <div>Feels like: 15</div>
      </div>
    </div>
  );
};
