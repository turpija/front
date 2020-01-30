import React, { Component } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const RenderRow = ({ vehMakes, vehModels, vehicles }) => {
  //console.log(vehModels);

  const getMakeName = makeId => {
    const renderModels = vehMakes.filter(id => makeId === id.Id);

    //console.log(renderModels[0].Name);

    return renderModels[0].Name;
  };

  return vehModels.map(model => (
    <tr key={model.Id}>
      {/* <td>{vehMake.Id}</td> */}
      <td>{getMakeName(model.MakeId)}</td>
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
};

export default RenderRow;
