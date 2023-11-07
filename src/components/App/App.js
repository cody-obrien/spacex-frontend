// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import { rocketList, dragonList, launchList } from "../../utils/constants";

function App() {
  //temporary state before fetch functionality is implemented
  const [launches, setLaunches] = useState([launchList]);
  const [rockets, setRockets] = useState([rocketList]);
  const [dragons, setDragons] = useState([dragonList]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
