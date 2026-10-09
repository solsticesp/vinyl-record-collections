import { UserPlus, LogIn, Heart, Bookmark, LogOut, ShieldUser } from "lucide-react";
import { NavLink, Link } from "react-router";

export default function Header() {

    return (
        <header className="header">

            <div className="header-left">
                <Link to="/">
                    <div className="home-mark">
                    </div>
                </Link>


                <nav>
                    <NavLink to="/" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}>
                        Home
                    </NavLink>
                    <NavLink to="/about" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}>
                        About
                    </NavLink>
                    <NavLink to="/records" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}>
                        Records
                    </NavLink>
                    <NavLink to="/collections" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}>
                        Collections
                    </NavLink>
                </nav>
            </div>

            <div className="logo-mark">
                <img src="../public/vintage-background-with-vinyl-record.png" alt="Logo" />
            </div>

            <div className="header-right">

                <Link to="/dashboard" className="dashboard-btn">
                    Dashboard
                    <ShieldUser size={13} />
                </Link>

                <Link to="/list" className="wish-btn">
                    Wishlist
                    <Bookmark size={13} />
                </Link>

                <Link to="/list" className="favs-btn">
                    Favs
                    <Heart size={13} />
                </Link>

                <Link to="signup" className="signup-btn">
                    <UserPlus size={13} />
                </Link>

                <Link to="login" className="login-btn">
                    <LogIn size={13} />
                </Link>

                <button className="logout-btn">
                    <LogOut size={13} />
                </button>
            </div>

        </header>
    );
}