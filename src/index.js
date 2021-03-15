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
      <Route path="/Foodify" component={Foodify} exact />
      <Route path="/BMT" component={BMT} exact />
      <Route path="/Busify" component={Busify} exact />
      <Route path="/Keeper" component={Keeper} exact />
      <Route path="/Home" component={Home} exact />
      <Route path="/Potholes" component={Potholes} exact />
      <Route path="/Blog" component={Blog} exact />
      <Route path="/ToDo" component={ToDo} exact />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

render(<MyRoutes />, document.getElementById("root"));
