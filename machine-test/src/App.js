import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
