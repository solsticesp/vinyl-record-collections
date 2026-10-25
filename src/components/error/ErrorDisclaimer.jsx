import './error-disclaimer.css';

export default function ErrorDisclaimer({
    errorText
}) {

    return (
        <div className="error-box">
            <div className="error-box-header">
                <span className="eyebrow">OOPS...</span>
                <h2>SOMETHING WENT WRONG</h2>
            </div>

            <div className="error-modal-content">
                <p>
                    {errorText}
                </p>
            </div>
        </div>
    );
}