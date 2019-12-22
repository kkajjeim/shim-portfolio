import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Book from "./Book";
import Travel from "./Travel";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/booktogether" component={Book} />
      <Route path="/travelcalculator" component={Travel} />
    </Switch>
  </BrowserRouter>
);

export default App;
