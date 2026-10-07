export default function ListItem({
    imageUrl,
    artist,
    title,
}) {
    return (
        <article className="saved-record">

            <div className="saved-record-info">

                <div className="saved-record-image">
                    <img
                        src={imageUrl}
                        alt={artist}
                    />
                </div>

                <div className="saved-record-details">
                    <span className="saved-record-artist">
                        {artist}
                    </span>

                    <h3>
                        {title}
                    </h3>
                </div>

            </div>

            <button className="delete-btn">
                ×
            </button>

        </article>
    );
}