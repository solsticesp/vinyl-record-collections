import { useState } from "react";
// import { supabaseUrl, supabaseKey } from "../../supabase";

export default function SaveRecordsModal({
    onClose,
    record,
    onSave,
}) {
    const isEdit = !!record;

    const [tracks, setTracks] = useState(
        record?.tracklist || [
            { title: "", duration: "" },
            { title: "", duration: "" }
        ]
    );

    return (
        <div className="modal-overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="record-modal">

                <div className="modal-header">
                    <div>
                        <span className="eyebrow">ADMIN</span>
                        <h2>{isEdit ? "EDIT RECORD" : "ADD NEW RECORD"}</h2>
                    </div>

                    <button className="modal-close" onClick={onClose}>
                        ×
                    </button>
                </div>


                <form
                    className="record-form"
                    onSubmit={(event) => {
                        event.preventDefault();

                        const formData = new FormData(event.target);

                        const newRecord = {
                            title: formData.get("title"),
                            artist: formData.get("artist"),
                            category_id: Number(formData.get("category_id")),
                            release_year: Number(formData.get("release_year")),
                            price: Number(formData.get("price")),
                            format: formData.get("format"),
                            cover_url: formData.get("cover_url"),
                            description: formData.get("description"),
                            tracklist: tracks
                        };

                        onSave(newRecord);
                    }}
                >
                    <section className="form-section">
                        <div className="form-section-heading">
                            <span>01</span>
                            <h3>Basic Information</h3>
                        </div>

                        <div className="form-grid">
                            <div className="form-group full">
                                <label>Title</label>
                                <input type="text" name="title" defaultValue={record?.title || ""} />
                            </div>

                            <div className="form-group full">
                                <label>Artist</label>
                                <input type="text" name="artist" defaultValue={record?.artist || ""} />
                            </div>

                            <div className="form-group">
                                <label>Genre</label>
                                <select name="category_id" defaultValue={record?.category_id || ""}>
                                    <option value="">Select genre</option>
                                    <option value="1">Rock & Metal</option>
                                    <option value="2">Pop</option>
                                    <option value="3">Jazz & Soul</option>
                                    <option value="4">Classical</option>
                                    <option value="5">R&B & Hip-Hop</option>
                                    <option value="6">Electronic</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Release Year</label>
                                <input type="number" name="release_year" defaultValue={record?.release_year || ""} />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" name="price" defaultValue={record?.price || ""} />
                            </div>

                            <div className="form-group">
                                <label>Format</label>
                                <select
                                    name="format"
                                    defaultValue={record?.format || ""}
                                >
                                    <option value="">Select format</option>
                                    <option value="LP">LP</option>
                                    <option value="EP">EP</option>
                                    <option value="Single">Single</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    <section className="form-section">
                        <div className="form-section-heading">
                            <span>02</span>
                            <h3>Cover</h3>
                        </div>

                        <div className="cover-upload">
                            <div className="cover-upload-info">
                                <label htmlFor="cover">
                                    Cover URL
                                </label>

                                <input
                                    id="cover"
                                    name="cover_url"
                                    type="url"
                                    placeholder="https://example.com/cover.jpg"
                                    defaultValue={record?.cover_url || ""}
                                />

                                <small>
                                    Enter a direct link to the album cover
                                </small>
                            </div>
                        </div>
                    </section>

                    <section className="form-section">
                        <div className="form-section-heading">
                            <span>03</span>
                            <h3>Description</h3>
                        </div>

                        <div className="form-group">
                            <textarea
                                name="description"
                                rows="5"
                                defaultValue={record?.description || ""}
                            ></textarea>
                        </div>
                    </section>

                    <section className="form-section">

                        <div className="form-section-heading">
                            <span>04</span>
                            <h3>Tracklist</h3>
                        </div>

                        <div className="track-form">
                            <div className="track-form-header">
                                <span>#</span>
                                <span>Track</span>
                                <span>Duration</span>
                                <span></span>
                            </div>

                            {tracks.map((track, index) => (
                                <div className="track-form-row" key={index}>

                                    <span className="track-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <input
                                        type="text"
                                        placeholder="Track title"
                                        value={track.title}
                                        onChange={(event) => {
                                            const updatedTracks = [...tracks];

                                            updatedTracks[index].title = event.target.value;

                                            setTracks(updatedTracks);
                                        }}
                                    />

                                    <input
                                        type="text"
                                        placeholder="0:00"
                                        value={track.duration}
                                        onChange={(event) => {
                                            const updatedTracks = [...tracks];

                                            updatedTracks[index].duration = event.target.value;

                                            setTracks(updatedTracks);
                                        }}
                                    />

                                    <button
                                        type="button"
                                        className="remove-track"
                                        onClick={() => {
                                            setTracks(
                                                tracks.filter((_, trackIndex) => trackIndex !== index)
                                            );
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}

                            <button
                                type="button"
                                className="add-track"
                                onClick={() => {
                                    setTracks([
                                        ...tracks,
                                        {
                                            title: "",
                                            duration: ""
                                        }
                                    ]);
                                }}
                            >
                                + Add Track
                            </button>
                        </div>
                    </section>


                    {/* FOOTER */}

                    <div className="modal-footer">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            {isEdit ? "Save Changes" : "Add Record"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}