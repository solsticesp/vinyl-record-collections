import { useState } from "react";

const initialValues = {
    title: '',
    artist: '',
    category_id: '',
    release_year: '',
    price: '',
    format: '',
    cover_url: '',
    description: '',
    tracklist: [],
}

export default function SaveRecordsModal({
    record,
    onClose,
    onSave,
}) {
    const isEdit = !!record;
    const [values, setValues] = useState(
        record ? {
            ...initialValues,
            ...record,
        } : initialValues
    );

    const [tracks, setTracks] = useState(
        record?.tracklist?.length
            ? record.tracklist
            : [
                { title: "", duration: "" },
                { title: "", duration: "" }
            ]
    );

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const submitAction = () => {
        const newRecord = {
            ...values,
            category_id: Number(values.category_id),
            release_year: Number(values.release_year),
            price: Number(values.price),
            tracklist: tracks,
        };

        onSave(newRecord);
    };

    return (
        <div className="modal-overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="record-modal">

                <div className="modal-header">
                    <div>
                        <span className="eyebrow">USER</span>
                        <h2>{isEdit ? "EDIT RECORD" : "ADD NEW RECORD"}</h2>
                    </div>

                    <button className="modal-close" onClick={onClose}>
                        ×
                    </button>
                </div>


                <form
                    className="record-form" action={submitAction}
                >
                    <section className="form-section">
                        <div className="form-section-heading">
                            <span>01</span>
                            <h3>Basic Information</h3>
                        </div>

                        <div className="form-grid">
                            <div className="form-group full">
                                <label>Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group full">
                                <label>Artist</label>
                                <input
                                    type="text"
                                    name="artist"
                                    value={values.artist}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Genre</label>
                                <select
                                    name="category_id"
                                    value={values.category_id}
                                    onChange={changeHandler}
                                >
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
                                <input
                                    type="number"
                                    name="release_year"
                                    value={values.release_year || ""}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={values.price || ""}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Format</label>
                                <select
                                    name="format"
                                    value={values.format}
                                    onChange={changeHandler}
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
                                    value={values.cover_url}
                                    onChange={changeHandler}
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
                                value={values.description}
                                onChange={changeHandler}
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
                                            setTracks(tracks.map((track, trackIndex) =>
                                                trackIndex === index
                                                    ? { ...track, title: event.target.value }
                                                    : track
                                            ));
                                        }}
                                    />

                                    <input
                                        type="text"
                                        placeholder="0:00"
                                        value={track.duration}
                                        onChange={(event) => {
                                            setTracks(tracks.map((track, trackIndex) =>
                                                trackIndex === index
                                                    ? { ...track, duration: event.target.value }
                                                    : track
                                            ));
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