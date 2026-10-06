import { UserPlus, LogIn, Heart } from "lucide-react";

export default function Header() {

    return (
        <header className="header">

            <div className="header-left">
                <div className="home-mark">
                    <span></span>
                </div>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">New</a>
                    <a href="#">All Records</a>
                    <a href="#">Collections</a>
                </nav>
            </div>

            <div className="logo-mark">
                <img src="./public/vintage-background-with-vinyl-record.png" alt="Logo" />
            </div>

            <div className="header-right">

                <button className="favs-btn">
                    Favs
                    <Heart size={13} />
                </button>

                <button className="signup-btn">
                    <UserPlus size={13} />
                </button>

                <button className="login-btn">
                    <LogIn size={13} />
                </button>
            </div>

        </header>
    );
}