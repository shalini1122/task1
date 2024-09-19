import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        let errorMessages = {};

        const registeredUser = JSON.parse(localStorage.getItem('user'));

        if (!registeredUser) {
            alert('No registered users. Please register first.');
            return;
        }

        // Validate email and password
        if (email !== registeredUser.email) {
            errorMessages.email = 'Email does not match any registered user';
        }

        if (password !== registeredUser.password) {
            errorMessages.password = 'Password is incorrect';
        }

        if (Object.keys(errorMessages).length > 0) {
            setErrors(errorMessages);
        } else {
            // Login successful
            alert('Login successful!');
            navigate('/account');
        }
    };

    return (
        <div className="container mt-5 ">
            <div className="card mx-auto " style={{ maxWidth: '400px' }} >
                <div className="card-body border border-primary rounded-3 border-3">
                    <h2 className="card-title text-center">Login</h2>
                    <form onSubmit={handleLogin}>
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
                        <button type="submit" className="btn btn-primary d-grid gap-2 col-3 mx-auto">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
