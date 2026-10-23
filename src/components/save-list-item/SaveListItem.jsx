import { Link } from "react-router";

export default function SaveListItem({
    id,
    imageUrl,
    artist,
    title,
    onRemove
}) {
    return (
        <article className="saved-record">

            <div className="saved-record-info">

                <Link to={`/records/${id}`} className="saved-record-image">
                    <img
                        src={imageUrl}
                        alt={artist}
                    />
                </Link>

                <div className="saved-record-details">
                    <span className="saved-record-artist">
                        {artist}
                    </span>

                    <h3>
                        {title}
                    </h3>
                </div>

            </div>

            <button className="delete-btn" onClick={() => onRemove(id)}>
                ×
            </button>

        </article>
    );
}