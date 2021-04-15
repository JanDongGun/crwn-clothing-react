import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const Hats = () => {
  return (
    <div className="">
      <h1>HATS</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop/hats" component={Hats}></Route>
      </Switch>
    </div>
  );
}

export default App;
