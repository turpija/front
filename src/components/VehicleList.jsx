import React, { Component } from "react";
import { getVehicleMakes } from "../VehicleMakeDB";
import { getVehicleModels } from "../VehicleModelDB";

class VehicleList extends Component {
  state = {
    vehicleMakes: getVehicleMakes(),
    vehicleModels: getVehicleModels()
  };

  handleEdit = model => {
    //console.log(model);
  };

  renderModelCell(vehMake) {
    //render models with matching id for make
    const renderModels = this.state.vehicleModels.filter(
      id => vehMake.Id === id.MakeId
    );
    return renderModels.map(model => (
      <tr key={model.Id}>
        {/* <td>{vehMake.Id}</td> */}
        <td>{vehMake.Name}</td>
        {/* <td>{model.Id}</td> */}
        <td>{model.Name}</td>
        <td>
          <button
            onClick={() => this.handleEdit(model)}
            className="btn btn-outline-primary btn-sm"
          >
            EDIT
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">Vehicle Make #</th> */}
              <th scope="col">Vehicle Make</th>
              {/* <th scope="col">Model #</th> */}
              <th scope="col">Model</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.vehicleMakes.map(item => this.renderModelCell(item))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VehicleList;
