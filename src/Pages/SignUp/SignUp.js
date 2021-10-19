import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const {createUser} = useAuth();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    //const [error, setError] = useState('');

    //handle email input
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //handle pass input
    const handlePassChange = e => {
      setPass(e.target.value);
    }

    //function for handling registration
    const handleRegistration = e => {
        e.preventDefault();
        createUser(email, pass);
    }

    return (
        <div>
        <form onSubmit={handleRegistration} className="container col-md-6 mt-5  fw-normal">
        <div className="mb-3">
            <label>Email address</label>
            <input onBlur={handleEmailChange} className="form-control" type="email" placeholder="Enter email" required/>
        </div>

        <div className="mb-3">
            <label>Password</label>
            <input onBlur={handlePassChange} className="form-control" type="password" placeholder="Password" required/>
        </div>
        <div className="mb-3">
            <label>Allready a member!</label>
            <Link to="/login"> <span> Login</span> </Link>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};

export default SignUp;