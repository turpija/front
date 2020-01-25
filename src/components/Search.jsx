import React, { Component } from "react";
import { reaction } from "mobx";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="input-group-prepend">
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          aria-label="search"
          aria-describedby="addon-wrapping"
        />
      </div>
    );
  }
}

export default Search;
