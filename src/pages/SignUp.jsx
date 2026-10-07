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
                                    id="firstName"
                                    type="text"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">
                                    Last Name
                                </label>

                                <input
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
                                id="email"
                                type="email"
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <input
                                id="confirmPassword"
                                type="password"
                            />
                        </div>

                        <label className="terms-check">
                            <input type="checkbox" />

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

                        <a href="#">
                            Log In
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}