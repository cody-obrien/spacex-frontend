import "./Main.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { CardItemsContext } from "../../contexts/CardItemsContext";
export default function Main() {
  const cardItemsContext = useContext(CardItemsContext);

  return (
    <div className="main">
      <h2>Here's a title for the main section</h2>
      <section className="cards__section">
        {cardItemsContext.map((item) => {
          return (
            <Card key={item.data[0].id} data={item.data[0]} type={item.type} />
          );
        })}
      </section>
    </div>
  );
}
