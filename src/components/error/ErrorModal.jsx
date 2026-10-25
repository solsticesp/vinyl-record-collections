export default function ErrorModal({
    errorText,
    onClose
}) {
    return (

        <div className="modal-overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div
                className="error-modal"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="error-modal-header">
                    <span className="eyebrow">OOPS...</span>
                    <h2>SOMETHING WENT WRONG</h2>
                </div>

                <div className="error-modal-content">
                    <p>
                        {errorText}
                    </p>
                </div>

                <div className="error-modal-footer">
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );

}