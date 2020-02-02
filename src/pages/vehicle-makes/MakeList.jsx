import React from "react";
import { getVehicleMakes } from "./../../common/data/VehicleMake";

const MakeList = () => {
  const vehicleMakes = getVehicleMakes();

  return (
    <React.Fragment>
      <h5>Vehicle Makes List</h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">abrv</th>
          </tr>
        </thead>
        <tbody>
          {vehicleMakes.map(model => (
            <tr key={model.id}>
              <td>{model.id}</td>
              <td>{model.name}</td>
              <td>{model.abrv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MakeList;
