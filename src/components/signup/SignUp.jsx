import { useState } from "react";
import { Link } from "react-router";

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    country: '',
    password: '',
    terms_check: false,
};

export default function SignUp() {
    const [data, setData] = useState(initialValues)

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        }));
    };

    const submitAction = () => {
        console.log('Submit');

        //Reset form
        setData(initialValues);
    }

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
                    <form className="auth-form" action={submitAction}>
                        <div className="auth-name-row">
                            <div className="form-group">
                                <label htmlFor="firstName">
                                    First Name
                                </label>

                                <input
                                    name="first_name"
                                    value={data.first_name}
                                    onChange={changeHandler}
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
                                    value={data.last_name}
                                    onChange={changeHandler}
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
                                value={data.email}
                                onChange={changeHandler}
                                id="email"
                                type="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">
                                Country
                            </label>

                            <input
                                name="country"
                                value={data.country}
                                onChange={changeHandler}
                                id="country"
                                type="text"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                name="password"
                                value={data.password}
                                onChange={changeHandler}
                                id="password"
                                type="password"
                            />
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <input
                                name="confirm-password"
                                value={data.confirm_password}
                                onChange={changeHandler}
                                id="confirmPassword"
                                type="password"
                            />
                        </div> */}

                        <label className="terms-check">
                            <input
                                name="terms_check"
                                checked={data.terms_check}
                                onChange={changeHandler}
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