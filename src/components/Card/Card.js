import "./Card.css";

export default function Card({ data, type }) {
  return (
    <div className="card">
      <h3 className="card__title">{data.name}</h3>
      <img
        className="card__image"
        src={
          type === "launch"
            ? data.links.flickr.original[0]
            : data.flickr_images[0]
        }
        alt={data.name}
      />
      <div className="card__footer">
        <p className="card__description">
          {type === "launch" ? data.details : data.description}
        </p>
      </div>
    </div>
  );
}
