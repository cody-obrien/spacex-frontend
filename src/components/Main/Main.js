import "./Main.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { CardItemsContext } from "../../contexts/CardItemsContext";
export default function Main() {
  const cardItemsContext = useContext(CardItemsContext);

  return (
    <div className="main">
      <h2>Here's a title for the main section</h2>
      <div className="cards__section">
        {cardItemsContext.map((item) => {
          console.log(cardItemsContext);
          console.log(item);
          console.log(item.type);
          console.log(item.data[0]);
          console.log(item.data[0].id);
          return (
            <Card key={item.data[0].id} data={item.data[0]} type={item.type} />
          );
        })}
      </div>
    </div>
  );
}
