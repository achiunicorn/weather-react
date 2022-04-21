import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-12">
          <h1 id="current-city">Ottawa</h1>
        </div>
        <div className="col-12 current-date-time">
          <p>
            <span id="current-date">Friday, October 8, 2021</span>|
            <span id="current-time">3:45pm</span>
          </p>
        </div>
      </div>
    </div>
  );
}
