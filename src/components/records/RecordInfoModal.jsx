
export default function AdminRecordInfoModal({
    record,
    onClose }) {
    if (!record) return null;

    return (
        <div className="modal-overlay">
            <div className="backdrop" onClick={onClose}></div>

            <div className="record-info-modal">
                <button
                    className="modal-close"
                    onClick={onClose}
                    type="button"
                >
                    ✕
                </button>

                <span className="eyebrow">ADMIN / RECORD DETAILS</span>
                <h2>{record.title}</h2>
                <p className="record-info-artist">{record.artist}</p>

                <div className="record-info-image">
                    <img
                        src={record.cover_url}
                        alt={`${record.artist} - ${record.title}`}
                    />
                </div>

                <div className="record-info-grid">
                    <div>
                        <span>RECORD ID</span>
                        <p>{record.id}</p>
                    </div>
                    <div>
                        <span>CATEGORY</span>
                        <p>{record.categories?.name || "—"}</p>
                    </div>
                    <div>
                        <span>RELEASE YEAR</span>
                        <p>{record.release_year ?? "—"}</p>
                    </div>
                    <div>
                        <span>PRICE</span>
                        <p>
                            {record.price != null
                                ? `${record.price} €`
                                : "—"}
                        </p>
                    </div>
                    <div>
                        <span>FORMAT</span>
                        <p>{record.format || "—"}</p>
                    </div>
                    <div>
                        <span>LABEL</span>
                        <p>{record.label || "—"}</p>
                    </div>
                </div>

                <div className="record-info-description">
                    <span>DESCRIPTION</span>
                    <p>{record.description || "No description available."}</p>
                </div>

                <div className="record-info-tracklist">
                    <span>TRACKLIST</span>
                    {Array.isArray(record.tracklist) && record.tracklist.length > 0 ? (
                        <ol>
                            {record.tracklist.map((track, index) => (
                                <li key={index}>
                                    {typeof track === "string"
                                        ? track
                                        : `${track.title || track.name || "Untitled"}${track.duration ? ` — ${track.duration}` : ""}`}
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p>No tracklist available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}