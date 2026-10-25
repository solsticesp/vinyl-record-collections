import { UserPlus, LogIn, Heart, LogOut, ShieldUser } from "lucide-react";
import { useContext } from "react";
import { NavLink, Link } from "react-router";
import AuthContext from "../../contexts/auth-context";

export default function Header({
    isAuthenticated,
}) {
    const { user } = useContext(AuthContext)

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
                            <span>Hello, {user.user_metadata?.first_name}</span>
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
                            <Link to="/signup" className="signup-btn" aria-label="Signup">
                                <UserPlus size={13} />
                            </Link>

                            <Link to="/login" className="login-btn" aria-label="Login">
                                <LogIn size={13} />
                            </Link>
                        </>
                    )
                }

            </div>

        </header>
    );
}