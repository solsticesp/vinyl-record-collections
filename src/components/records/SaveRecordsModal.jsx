export default function SaveRecordsModal({
    onClose,
    record,
}) {
    const isEdit = !!record;

    return (
        <div className="modal-overlay" onClick={onClose}>

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

                    {/* BASIC INFORMATION */}

                    <section className="form-section">

                        <div className="form-section-heading">
                            <span>01</span>
                            <h3>Basic Information</h3>
                        </div>


                        <div className="form-grid">

                            <div className="form-group full">
                                <label>Title</label>
                                <input type="text" defaultValue={record?.title || ""}/>
                            </div>

                            <div className="form-group full">
                                <label>Artist</label>
                                <input type="text" defaultValue={record?.artist || ""}/>
                            </div>

                            <div className="form-group">
                                <label>Genre</label>
                                <select defaultValue={record?.category || ""}>
                                    <option>Select genre</option>
                                    <option>Rock & Metal</option>
                                    <option>Pop</option>
                                    <option>Jazz & Soul</option>
                                    <option>Classical</option>
                                    <option>R&B & Hip-Hop</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Release Year</label>
                                <input type="number" defaultValue={record?.year || ""}/>
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" defaultValue={record?.price || ""}/>
                            </div>

                            <div className="form-group">
                                <label>Format</label>
                                <select>
                                    <option>Vinyl</option>
                                    <option>LP</option>
                                    <option>12"</option>
                                    <option>7"</option>
                                </select>
                            </div>

                            <div className="form-group full">
                                <label>Label</label>
                                <input type="text" />
                            </div>

                        </div>

                    </section>


                    {/* COVER */}

                    <section className="form-section">

                        <div className="form-section-heading">
                            <span>02</span>
                            <h3>Cover</h3>
                        </div>

                        <div className="cover-upload">

                            <div className="cover-preview">
                                <span>NO COVER</span>
                            </div>

                            <div className="cover-upload-info">

                                <label
                                    htmlFor="cover"
                                    className="upload-button"
                                >
                                    Upload Cover
                                </label>

                                <input
                                    id="cover"
                                    type="file"
                                    accept="image/*"
                                />

                                <small>
                                    JPG, PNG or WEBP
                                </small>

                            </div>

                        </div>

                    </section>


                    {/* DESCRIPTION */}

                    <section className="form-section">

                        <div className="form-section-heading">
                            <span>03</span>
                            <h3>Description</h3>
                        </div>

                        <div className="form-group">
                            <textarea rows="5"></textarea>
                        </div>

                    </section>


                    {/* TRACKLIST */}

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