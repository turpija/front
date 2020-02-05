import React from "react";
import VehicleMakeService from "./../../common/data/VehicleMakeService";

const MakeList = () => {
  const vehicles = new VehicleMakeService();

  vehicles.put(2, "kurac", "palac");

  const allVehicles = vehicles.getAllData();
  console.log("all array: ");
  console.log(allVehicles);

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
          {allVehicles.map(model => (
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
