import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            id="current-location"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </button>
          <input
            type="text"
            className="form-control"
            id="city-input"
            placeholder="City search"
            autocomplete="off"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
