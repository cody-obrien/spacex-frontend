// import logo from "./logo.svg";
import "./App.css";
//react specific
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
//context
import { CardItemsContext } from "../../contexts/CardItemsContext.js";
//consts
import { rocketList, dragonList, launchList } from "../../utils/constants";

function App() {
  //temporary state before fetch functionality is implemented
  const [launches, setLaunches] = useState([launchList]);
  const [rockets, setRockets] = useState([rocketList]);
  const [dragons, setDragons] = useState([dragonList]);
  const [cardItems, setCardItems] = useState([]);

  //while (fetch promise has not returned) .then(isloading=true), in jsx change render of main vs preloader

  //will need this function later:
  //const genNewItem(list) return item from that list
  useEffect(() => {
    const cards = [
      { type: "launch", data: launches[0] },
      { type: "rocket", data: rockets[0] },
      { type: "dragon", data: dragons[0] },
    ];
    setCardItems(cards);
  }, []);

  return (
    <CardItemsContext.Provider value={cardItems}>
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
    </CardItemsContext.Provider>
  );
}

export default App;
