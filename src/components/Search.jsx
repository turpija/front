import React, { Component } from "react";
import { reaction } from "mobx";

const Search = ({ value, onChange }) => {
  return (
    <div className="input-group-prepend mx-5">
      <p className="m-3">filter table: </p>
      <div>
        <input
          id="inputSearch"
          type="text"
          className="form-control"
          placeholder="search..."
          aria-label="search"
          aria-describedby="addon-wrapping"
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default Search;
