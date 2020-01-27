import React, { Component } from "react";
import { reaction } from "mobx";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="input-group-prepend mx-5">
        <p className="m-3">filter table: </p>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="search..."
            aria-label="search"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
    );
  }
}

export default Search;
