import { useState } from "react";
import { Link } from "react-router";
import { validate } from "../../utils/validate";

export default function LogIn({
    onLogin,
}) {
    const [data, setData] = useState({
        login: {
            email: '',
            password: '',
        }
    });
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {

        setData((state) => ({
            login: {
                ...state.login,
                [e.target.name]: e.target.value
            }
        }));
    };

    //TODO: Validation function for login !

    const submitAction = () => {
        const errors = validate(data);

        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            console.log(errors);

            return;
        }

        onLogin(data.login);
    }

    const inputClass = (field) => `${errors[field] ? 'error-field' : ''}`;
    const errorText = (field) => errors[field] && (
        <p className="error-msg">{errors[field]}</p>
    )

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
                    <form className="auth-form" action={submitAction}>
                        <div className="form-group">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                onChange={changeHandler}
                                placeholder="your@email.com"
                                className={inputClass('login')}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                onChange={changeHandler}
                                placeholder="••••••••"
                                className={inputClass('login')}
                            />
                        </div>

                        {/* <div className="auth-options">
                            <label className="remember-me">
                                <input
                                    name="remember_me"
                                    type="checkbox" />
                                <span>Remember me</span>
                            </label>

                            <Link to="#">
                                Forgot password?
                            </Link>
                        </div> */}

                        {errorText('login')}

                        <button
                            type="submit"
                            className="auth-submit"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="auth-switch">
                        <span>Don't have an account?</span>

                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}