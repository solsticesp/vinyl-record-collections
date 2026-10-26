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

                    <Link to="/collections/2">Pop</Link>
                    <Link to="/collections/1">Rock & Metal</Link>
                    <Link to="/collections/3">Jazz & Soul</Link>
                    <Link to="/collections/5">R&B & Hip-Hop</Link>
                    <Link to="/collections/4">Classical</Link>
                    <Link to="/collections/6">Electronic</Link>
                </div>

            </div>


            <div className="footer-logo">

                <div className="tech">VINYL RECORDS LOVERS</div>

                <div className="big-logo">
                    <span></span>
                    <div className="logo-mark">
                        <img src="/vintage-background-with-vinyl-record.png" alt="Logo" />
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