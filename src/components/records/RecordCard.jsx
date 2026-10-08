import { Link } from "react-router";

export default function RecordCard({
    id,
    artist,
    title,
    imageUrl,
    price,
    category,
    year,
}) {
    return (
        <Link to={`/records/${id}`} className="record-card">

            <div className="record-card-image">
                <img
                    src={imageUrl}
                    alt={artist}
                />

                <button className="add-btn">
                    +
                </button>
                <button className="record-favorite">
                    ♡
                </button>
            </div>

            <div className="record-card-info">

                <div>
                    <h2>{title}</h2>
                    <p>{artist}</p>
                </div>

                <span>{price}€</span>

            </div>

            <div className="record-card-meta">
                <span>{category}</span>
                <span>{year}</span>
            </div>

        </Link>
    );
}