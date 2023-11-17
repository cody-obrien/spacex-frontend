// import logo from "./logo.svg";
import "./App.css";
//react specific
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Preloader from "../Preloader/Preloader.js";
//api
import { getItems } from "../../utils/api.js";
//context
import { CardItemsContext } from "../../contexts/CardItemsContext.js";
//consts
import { rocketList, dragonList, launchList } from "../../utils/constants";

function App() {
  //temporary state before fetch functionality is implemented
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [dragons, setDragons] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //while (fetch promise has not returned) .then(isloading=true), in jsx change render of main vs preloader

  //will need this function later:
  //const genNewItem(list) return item from that list

  useEffect(() => {
    getItems("launches")
      .then((res) => {
        setLaunches(res);
      })
      .then(() => getItems("rockets"))
      .then((res) => {
        setRockets(res);
      })
      .then(() => getItems("dragons"))
      .then((res) => {
        setDragons(res);
      })
      .then(() => {
        const cards = [
          { type: "launch", data: launches[0] },
          { type: "rocket", data: rockets[0] },
          { type: "dragon", data: dragons[0] },
        ];
        setCardItems(cards);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const cards = [
      { type: "launch", data: launches[1] },
      { type: "rocket", data: rockets[1] },
      { type: "dragon", data: dragons[1] },
    ];
    setCardItems(cards);
  }, [launches, rockets, dragons]);

  return (
    <CardItemsContext.Provider value={cardItems}>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            {isLoading ? <Preloader /> : <Main cards={cardItems} />}
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
