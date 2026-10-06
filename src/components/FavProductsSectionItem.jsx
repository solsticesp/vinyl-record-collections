export default function FavProductsSectionItem({
    imageUrl,
    category,
    artist,
    albumTitle,
    price,
}) {
    return (
        <article className="product-card">
            <div className="product-image">
                <img
                    src={imageUrl}
                    alt={artist}
                />
                <button className="add-btn">+</button>
            </div>

            <div className="product-meta">
                <small className="category">{category}</small>
                <span className="price">{price}€</span>
            </div>

            <h3 className="title">{artist} - {albumTitle}</h3>
        </article>
    );
}