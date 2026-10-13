import { Link } from "react-router";

export default function Footer() {

    return (
        <footer>

            <div className="footer-left">

                <div>
                    <small>INFO</small>

                    <Link to="/about">ABOUT</Link>
                    <Link to="/contacts">CONTACTS</Link>
                </div>

                <div>
                    <small>COLLECTIONS</small>

                    <a href="#">Pop</a>
                    <a href="#">Rock & Metal</a>
                    <a href="#">Jazz & Soul</a>
                    <a href="#">R&B & Hip-Hop</a>
                    <a href="#">Classical</a>
                </div>

            </div>


            <div className="footer-logo">

                <div className="tech">VINYL RECORDS LOVERS</div>

                <div className="big-logo">
                    <span></span>
                    {/* <strong>XIV<br />QR</strong> */}
                    <div className="logo-mark">
                        <img src="./public/vintage-background-with-vinyl-record.png" alt="Logo" />
                    </div>
                </div>

                <small>
                    Noa "field communication"
                </small>

            </div>


            <div className="footer-bottom">
                <span>© 2026 — everything</span>
                <span>privacy</span>
            </div>

        </footer>
    );
}