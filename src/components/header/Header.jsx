import { UserPlus, LogIn, Heart, LogOut, ShieldUser } from "lucide-react";
import { NavLink, Link } from "react-router";

export default function Header({
    isAuthenticated,
}) {

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

                {isAuthenticated
                    ? (
                        <>
                            {/* User only */}
                            <Link to="/collection" className="dashboard-btn">
                                My Collection
                                <ShieldUser size={13} />
                            </Link>

                            <Link to="/list" className="favs-btn">
                                Favourites
                                <Heart size={13} />
                            </Link>

                            <Link to="/logout" className="logout-btn">
                                <LogOut size={13} />
                            </Link>
                        </>
                    )
                    : (
                        <>
                            {/* Guest only */}
                            <Link to="/signup" className="signup-btn">
                                <UserPlus size={13} />
                            </Link>

                            <Link to="/login" className="login-btn">
                                <LogIn size={13} />
                            </Link>
                        </>
                    )
                }

            </div>

        </header>
    );
}