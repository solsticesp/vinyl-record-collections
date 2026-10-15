export function validate(values) {
        let errors = {};

        //Validate first name field
        if (!values.first_name) {
            errors['first_name'] = 'First name is required!';
        }

        //Validate last name field
        if (!values.last_name) {
            errors['last_name'] = 'Last name is required!';
        }

        //Validate email field
        if (!values.email) {
            errors['email'] = 'Email is required!';
        }

        //Validate password field
        if (!values.password) {
            errors['password'] = 'Password is required!';
        }

        if (values.password && values.password.length < 4) {
            errors['password'] = 'Password must be at least 4 characters long!';
        }

        if (values.confirm_password !== values.password) {
            errors['confirm_password'] = 'Passwords do not match!';
        }

        //Validate checkbox
        if (!values.terms_check) {
            errors['terms_check'] = 'You must accept the terms and conditions to proceed.';
        }

        return errors;
}

