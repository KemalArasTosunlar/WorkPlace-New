import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, 1 letter and 1 number
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!validatePassword(password)) {
            newErrors.password = 'Password must be at least 8 characters long and contain at least one letter and one number';
        }
        if (!termsAccepted) {
            newErrors.terms = 'You must accept the terms and conditions';
        }

        if (Object.keys(newErrors).length === 0) {
            // Proceed with form submission
            console.log('Form submitted successfully');
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)}
                    />
                    Accept Terms and Conditions
                </label>
                {errors.terms && <p>{errors.terms}</p>}
            </div>
            <button type="submit" disabled={!validateEmail(email) || !validatePassword(password) || !termsAccepted}>
                Login
            </button>
        </form>
    );
};

export default Login;
