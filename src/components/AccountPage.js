import React, { useState, useEffect } from 'react';

const AccountPage = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [isEditing, setIsEditing] = useState(false); // Track if user is editing

    useEffect(() => {
        // Get user data from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserDetails(user);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsEditing(false);
        localStorage.setItem('user', JSON.stringify(userDetails)); // Update localStorage with new user details
        alert('Account updated successfully');
    };

    return (
        <div className="container mt-5">
             <div className="card mx-auto" style={{ maxWidth: '500px' }}>
             <div className="card-body border border-primary rounded-3 border-3 ">
            <h2 className='text-center'>Account Information</h2>
            {!isEditing ? (
                <div>
                    <table className="table table-bordered border-dark">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{userDetails.name || 'N/A'}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{userDetails.email}</td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td>{userDetails.password || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        className="btn btn-primary mt-3 d-grid gap-2 col-3 mx-auto"
                        onClick={() => setIsEditing(true)}
                    >
                        Update
                    </button>
                </div>
            ) : (
                <form onSubmit={handleUpdate}>
                    <table className="table table-bordered border-dark">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control table table-bordered border-dark"
                                        name="name"
                                        value={userDetails.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                                    <input
                                        type="email"
                                        className="form-control table table-bordered border-dark"
                                        name="email"
                                        value={userDetails.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td>
                                    <input
                                        type="password"
                                        className="form-control table table-bordered border-dark"
                                        name="password"
                                        value={userDetails.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-success mt-3 ">
                        Save Changes
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary ms-2 mt-3"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </form>
            )}
            </div>
            </div>
        </div>
    );
};

export default AccountPage;
