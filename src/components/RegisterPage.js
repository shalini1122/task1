import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        let errorMessages = {};

        // Validate email
        if (!validateEmail(email)) {
            errorMessages.email = 'Please enter a valid email address';
        }

        // Validate password strength
        if (!validatePassword(password)) {
            errorMessages.password = 'Password should be at least 6 characters long';
        }

        // Ensure passwords match
        if (password !== confirmPassword) {
            errorMessages.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errorMessages).length > 0) {
            setErrors(errorMessages);
        } else {
            // Save user data after successful registration
            const registeredUser = { name,email, password };
            localStorage.setItem('user', JSON.stringify(registeredUser));

            // Redirect to login page
            alert('Registration successful! Please login.');
            navigate('/login');
        }
    };

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-body border border-primary rounded-3 border-3">
                    <h2 className="card-title text-center">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control table table-bordered border-dark"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            {errors.name && <p className="text-danger">{errors.name}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control table table-bordered border-dark"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control table table-bordered border-dark"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {errors.password && <p className="text-danger">{errors.password}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control table table-bordered border-dark"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary d-grid gap-2 col-3 mx-auto">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
