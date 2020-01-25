import React from "react";
import "./App.css";
import { observable } from "mobx";
import VehicleList from "./components/VehicleList";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Search />
      <VehicleList />
    </div>
  );
}

export default App;
