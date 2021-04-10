import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Remediations } from "./pages/remediations";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/remediations" />
        </Route>
        <Route path="/remediations">
          <Remediations />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
