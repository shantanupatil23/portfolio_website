import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from "./App";
import Foodify from "./components/Projects/Foodify";
import BMT from "./components/Projects/BMT";
import Busify from "./components/Projects/Busify";
import Keeper from "./components/Projects/Keeper";
import Home from "./components/Projects/Home";
import Potholes from "./components/Projects/Potholes";
import Blog from "./components/Projects/Blog";
import ToDo from "./components/Projects/ToDo";

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
