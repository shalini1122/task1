import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AccountPage from './components/AccountPage';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route
            path="/"
            element={
              <div className="container mt-5 text-center">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card p-4 shadow-sm">
                      <h2 className="mb-4">Welcome to Our App</h2>
                      <h5 className=" text-success">
                        Create an account or log in to access your profile and manage your details.
                      </h5>
                      <div className="d-flex justify-content-around mt-4">
                      <a href="/register" className="btn btn-primary btn-lg">
                          Register
                        </a>
                        <a href="/login" className="btn btn-primary btn-lg">
                          Login
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
