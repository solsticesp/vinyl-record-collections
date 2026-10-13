import { Link } from "react-router";

export default function SignUp() {
    return (
        <div className="page auth-page">
            <div className="auth-layout">
                <div className="auth-intro">
                    <span className="eyebrow">
                        JOIN THE COMMUNITY
                    </span>

                    <h1>
                        SIGN<br />
                        UP
                    </h1>

                    <p>
                        Create an account to save your
                        favorite records and build your collection.
                    </p>
                </div>


                <div className="auth-form-wrapper">
                    <form className="auth-form">
                        <div className="auth-name-row">
                            <div className="form-group">
                                <label htmlFor="firstName">
                                    First Name
                                </label>

                                <input
                                    name="first_name"
                                    id="firstName"
                                    type="text"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">
                                    Last Name
                                </label>

                                <input
                                    name="last_name"
                                    id="lastName"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                name="email"
                                id="email"
                                type="email"
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                name="password"
                                id="password"
                                type="password"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <input
                                name="confirm-password"
                                id="confirmPassword"
                                type="password"
                            />
                        </div>

                        <label className="terms-check">
                            <input
                                name="terms_check"
                                type="checkbox" />

                            <span>
                                I agree to the
                                <a href="#"> Terms &amp; Conditions</a>
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="auth-submit"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="auth-switch">
                        <span>
                            Already have an account?
                        </span>

                        <Link to="/login">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}