export default function DeleteRecordModal({
    record,
    onClose,
    onConfirm,
}) {
    return (
        <div className="modal-overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div
                className="delete-modal"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="delete-modal-header">
                    <span className="eyebrow">ADMIN</span>
                    <h2>DELETE RECORD</h2>
                </div>

                <div className="delete-modal-content">
                    <p>
                        Are you sure you want to delete this record?
                    </p>

                    <strong>
                        {record.artist} — {record.title}
                    </strong>

                    <span>
                        This action cannot be undone.
                    </span>
                </div>

                <div className="delete-modal-footer">
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="delete-confirm-btn"
                        onClick={onConfirm}
                    >
                        Delete Record
                    </button>
                </div>
            </div>
        </div>
    );
}