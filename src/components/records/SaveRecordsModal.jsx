export default function SaveRecordsModal({
    onClose,
    record,
}) {
    const isEdit = !!record;

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


                <form className="record-form">
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
                                <select name="category_id" defaultValue={record?.category || ""}>
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
                                <input type="number" name="release_year" defaultValue={record?.year || ""} />
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

                            <div className="track-form-row">
                                <span className="track-number">
                                    01
                                </span>

                                <input
                                    type="text"
                                    placeholder="Track title"
                                />

                                <input
                                    type="text"
                                    placeholder="0:00"
                                />

                                <button
                                    type="button"
                                    className="remove-track"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="track-form-row">
                                <span className="track-number">
                                    02
                                </span>

                                <input
                                    type="text"
                                    placeholder="Track title"
                                />

                                <input
                                    type="text"
                                    placeholder="0:00"
                                />

                                <button
                                    type="button"
                                    className="remove-track"
                                >
                                    ×
                                </button>
                            </div>

                            <button
                                type="button"
                                className="add-track"
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