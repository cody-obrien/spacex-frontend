import "./Main.css";
import Card from "../Card/Card";
// import { useContext } from "react";
// import { CardItemsContext } from "../../contexts/CardItemsContext";
export default function Main({ cards }) {
  // const cardItemsContext = useContext(CardItemsContext);

  return (
    <main className="main">
      <h2 className="main__title">Launch, Rocket, Dragon</h2>
      <section className="main__cards-section">
        {cards.map((item) => {
          return item.data ? (
            <Card key={item.data.id} data={item.data} type={item.type} />
          ) : null;
        })}
      </section>
    </main>
  );
}
