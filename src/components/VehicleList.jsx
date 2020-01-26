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

  sortModels = () => {
    //console.log(this.state.vehicleModels);

    const vehicleModels = [...this.state.vehicleModels];

    function dynamicSort(property) {
      var sortOrder = 1;

      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }

      return function(a, b) {
        if (sortOrder == -1) {
          return b[property].localeCompare(a[property]);
        } else {
          return a[property].localeCompare(b[property]);
        }
      };
    }

    //myArray.sort((a, b) => (a.Name.toLowerCase > b.Name.toLowerCase ? 1 : -1));
    vehicleModels.sort(dynamicSort("Name"));
    this.setState({ vehicleModels });
    console.log(this.state.vehicleModels);
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
    //this.sortModels();
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              {/* <th scope="col">Vehicle Make #</th> */}
              <th scope="col">Vehicle Make</th>
              {/* <th scope="col">Model #</th> */}
              <th onClick={() => this.sortModels()} scope="col">
                Model <i className="fa fa-sort-desc"></i>
              </th>
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
