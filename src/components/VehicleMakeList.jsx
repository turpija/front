import React, { Component } from "react";
import { getVehicleMakes } from "./../VehicleMakeDB";
import { getVehicleModels } from "./../VehicleModelDB";

const vehicleMakes = getVehicleMakes();
const vehicleModels = getVehicleModels();

//console.log(vehicleMakes);
//console.log(vehicleModels);

class VehicleMakeList extends Component {
  renderModelCell(vehMake) {
    //console.log(vehMake);

    const renderModels = vehicleModels.filter(id => vehMake.Id === id.MakeId);
    //console.log(renderModels);
    // if vehMake ID = makeID printout <td's> in table

    return renderModels.map(model => (
      <tr key={model.Id}>
        <td>{vehMake.Id}</td>
        <td>{vehMake.Name}</td>
        <td>{model.Id}</td>
        <td>{model.Name}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Vehicle Make #</th>
              <th scope="col">Vehicle Make</th>
              <th scope="col">Model #</th>
              <th scope="col">Model</th>
            </tr>
          </thead>
          <tbody>{vehicleMakes.map(item => this.renderModelCell(item))}</tbody>
        </table>
      </div>
    );
  }
}

export default VehicleMakeList;
