import "./Card.css";

export default function Card(item, type) {
  return (
    <div className="card">
      <div className="card__title">{item.name}</div>
      <img
        className="card__image"
        src={
          type === "launch" ? item.flickr.original[0] : item.flickr_images[0]
        }
      />
      <div className="card__footer">
        <p className="card__description">
          {type === "launch" ? item.details : item.description}
        </p>
      </div>
    </div>
  );
}
