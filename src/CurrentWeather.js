import React from "react";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row current">
        <div className="col-6 current-weather">
          <p className="current-temp">
            <span id="changeTemp">15</span>
            <span className="tempUnit">°C</span>
          </p>
          <img src="" className="current-image" id="weatherIcon" alt="" />
        </div>
        <div className="col-6">
          <em>
            <ul className="current-details">
              <li id="currentDescription">Broken Clouds</li>
              <li>
                Humidity: <span id="currentHumidity">80</span>%
              </li>
              <li>
                Wind: <span id="currentWind">10</span>km/h
              </li>
            </ul>
          </em>
        </div>
      </div>
    </div>
  );
}
