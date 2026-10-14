import { useState } from "react";
import { Link } from "react-router";
import { validate } from "../../utils/validate";

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    country: '',
    password: '',
    terms_check: false,
};

export default function SignUp() {
    const [data, setData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        }));
    };

    const validationHandler = (e) => {
        setTouched(state => ({
            ...state,
            [e.target.name]: true,
        }));
        const errors = validate(data);
        setErrors(errors);
    }

    const submitAction = () => {
        const errors = validate(data);
        setErrors(errors);
        setTouched(errors);

        if (Object.keys(errors) > 0) {
            return;
        }

        //Reset form
        setData(initialValues);
    }

    const inputClass = (field) => `${errors[field] && touched[field] ? 'error-field' : ''}`;
    const errorText = (field) => errors[field] && touched[field] && (
        <p className="error-msg">{errors[field]}</p>
    )

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
                                    onBlur={validationHandler}
                                    id="firstName"
                                    type="text"
                                    className={inputClass('first_name')}
                                />
                                {errorText('first_name')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">
                                    Last Name
                                </label>

                                <input
                                    name="last_name"
                                    value={data.last_name}
                                    onChange={changeHandler}
                                    onBlur={validationHandler}
                                    id="lastName"
                                    type="text"
                                    className={inputClass('last_name')}
                                />
                                {errorText('last_name')}
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
                                onBlur={validationHandler}
                                id="email"
                                type="email"
                                className={inputClass('email')}
                            />
                            {errorText('email')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">
                                Country
                            </label>

                            <input
                                name="country"
                                value={data.country}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                id="country"
                                type="text"
                                className={inputClass('country')}
                            />
                            {errorText('country')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                name="password"
                                value={data.password}
                                onChange={changeHandler}
                                onBlur={validationHandler}
                                id="password"
                                type="password"
                                className={inputClass('password')}
                            />
                            {errorText('password')}
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
                                type="checkbox"
                                className={inputClass('terms_check')}
                            />

                            <span>
                                I agree to the
                                <a href="#"> Terms &amp; Conditions</a>
                            </span>
                        </label>
                        {errorText('terms_check')}


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