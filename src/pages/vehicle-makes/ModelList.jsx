import React from "react";
import { getVehicleModels } from "../../common/data/VehicleModel";

const ModelList = () => {
  const vehicleModels = getVehicleModels();

  return (
    <React.Fragment>
      <h5>Vehicle Models List</h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">make id</th>
            <th scope="col">name</th>
            <th scope="col">abrv</th>
          </tr>
        </thead>
        <tbody>
          {vehicleModels.map(model => (
            <tr key={model.id}>
              <td>{model.id}</td>
              <td>{model.makeId}</td>
              <td>{model.name}</td>
              <td>{model.abrv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ModelList;
