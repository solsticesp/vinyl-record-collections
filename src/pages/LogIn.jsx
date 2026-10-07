export default function LogIn() {
    return (
        <div className="page auth-page">
            <div className="auth-layout">
                <div className="auth-intro">
                    <span className="eyebrow">
                        WELCOME BACK
                    </span>

                    <h1>
                        LOG<br />
                        IN
                    </h1>

                    <p>
                        Sign in to access your favorites
                        and manage your collection.
                    </p>
                </div>

                <div className="auth-form-wrapper">
                    <form className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="auth-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>

                            <a href="#">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="auth-submit"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="auth-switch">
                        <span>Don't have an account?</span>

                        <a href="#">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}