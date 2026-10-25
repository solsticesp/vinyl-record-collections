export function validate(values) {
    let errors = {};

    for (const key in values) {

        switch (key) {
            case 'first_name':
                if (!values.first_name) {
                    errors['first_name'] = 'First name is required!';
                }
                break;

            case 'last_name':
                if (!values.last_name) {
                    errors['last_name'] = 'Last name is required!';
                }
                break;

            case 'email':
                if (!values.email) {
                    errors['email'] = 'Email is required!';
                }
                break;

            case 'password':
                if (!values.password) {
                    errors['password'] = 'Password is required!';
                }

                if (values.password && values.password.length < 4) {
                    errors['password'] = 'Password must be at least 4 characters long!';
                }
                break;

            case 'confirm_password':
                if (values.confirm_password !== values.password) {
                    errors['confirm_password'] = 'Passwords do not match!';
                }
                break;

            case 'terms_check':
                if (!values.terms_check) {
                    errors['terms_check'] = 'You must accept the terms and conditions to proceed.';
                }
                break;

            case 'login':
                if (!values.login.email || !values.login.password) {
                    errors['login'] = 'Email and password are required.';
                }
                break;
                
            default:
                break;
        }
    }

    return errors;
}

