import React from "react";

import "./styles.css";

function Filters() {
  return (
    <div className="filters">
      <form className="flex flex--column flex--align-center flex--justify-center">
        <div className="animated-input">
          <input
            type="text"
            placeholder=" "
            className="animated-input__inputs"
            name="name"
          />
          <label className="animated-input__labels">Search By Name</label>
        </div>
        <div className="animated-input">
          <input
            type="text"
            placeholder=" "
            className="animated-input__inputs"
            name="language"
          />
          <label className="animated-input__labels">Search By Language</label>
        </div>
        <select name="sortby">
          <option value="">--Sort By--</option>
          <option value="name">Name</option>
          <option value="stars">Stars</option>
        </select>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default Filters;
