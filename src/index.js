import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from "./App";
import Foodify from "./components/Project_Foodify";
import BMT from "./components/Project_BMT";
import Busify from "./components/Project_Busify";
import Keeper from "./components/Project_Keeper";
import Home from "./components/Project_Home";
import Potholes from "./components/Project_Potholes";
import Blog from "./components/Project_Blog";
import ToDo from "./components/Project_ToDo";

const MyRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/Project/Foodify" component={Foodify} exact />
      <Route path="/Project/BMT" component={BMT} exact />
      <Route path="/Project/Busify" component={Busify} exact />
      <Route path="/Project/Keeper" component={Keeper} exact />
      <Route path="/Project/Home" component={Home} exact />
      <Route path="/Project/Potholes" component={Potholes} exact />
      <Route path="/Project/Blog" component={Blog} exact />
      <Route path="/Project/ToDo" component={ToDo} exact />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

render(<MyRoutes />, document.getElementById("root"));
