import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom";
import HomePage from "./../pages/home/HomePage";
import ModelCreate from "./../pages/vehicle-makes/ModelCreate";
import ModelEdit from "../pages/vehicle-makes/ModelEdit";
import MakeList from "../pages/vehicle-makes/MakeList";
import ModelList from "./../pages/vehicle-makes/ModelList";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        <Router>
          <nav className="navbar-nav">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/vehicle-makes">Vehicle Makes List</NavLink>
            <NavLink to="/vehicle-models">Vehicle Models List</NavLink>
            {/* <NavLink to="/vehicle-makes/model-create">- Model Create</NavLink> */}
            {/* <NavLink to="/vehicle-makes/model-edit">- Model Edit</NavLink> */}
          </nav>
          <hr />
          <main className="container">
            <Switch>
              <Route path="/home" component={HomePage}></Route>
              <Route exact path="/vehicle-makes" component={MakeList}></Route>
              <Route
                path="/vehicle-makes/model-create"
                component={ModelCreate}
              ></Route>
              <Route
                path="/vehicle-makes/model-edit"
                component={ModelEdit}
              ></Route>

              <Route exact path="/vehicle-models" component={ModelList}></Route>
              <Redirect from="/" exact to="/home" />
            </Switch>
          </main>
        </Router>
        <hr />
        <footer>foot</footer>
      </React.Fragment>
    );
  }
}

export default Layout;
