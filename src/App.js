import React from "react";
import "./App.css";
import { observable } from "mobx";
import VehicleMakeList from "./components/VehicleMakeList";

function App() {
  return (
    <div>
      <VehicleMakeList />
    </div>
  );
}

export default App;
