export default function RecordCard({
    imageUrl,
    artist,
    title,
    price,
    category,
    year,
}) {
    return (
        <article className="record-card">

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

        </article>
    );
}