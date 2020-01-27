import React, { Component } from "react";
import { getVehicleMakes } from "../VehicleMakeDB";
import { getVehicleModels } from "../VehicleModelDB";
import dynamicSort from "../common/DynamicSort";
import RenderRow from "./RenderRow";

class VehicleList extends Component {
  state = {
    vehicleMakes: getVehicleMakes(),
    vehicleModels: getVehicleModels()
  };

  handleEdit = model => {
    //console.log(model);
  };

  sortModels = () => {
    const vehicleModels = [...this.state.vehicleModels];

    vehicleModels.sort(dynamicSort("Name"));

    this.setState({ vehicleModels });
    //console.log(this.state.vehicleModels);
  };

  render() {
    //this.sortModels();
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              {/* <th scope="col">Vehicle Make #</th> */}
              <th scope="col">Vehicle Make</th>
              {/* <th scope="col">Model #</th> */}
              <th scope="col">
                Model{" "}
                <button
                  onClick={() => this.sortModels()}
                  className="btn btn-outline-primary btn-sm m-2"
                >
                  sort models (asc)
                </button>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <RenderRow
              vehMakes={this.state.vehicleMakes}
              vehModels={this.state.vehicleModels}
            />
            {/* {RenderRow(this.state.vehicleMakes, this.state.vehicleModels)} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VehicleList;
