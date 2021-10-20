import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle, signInUsingEmailAndPass} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [error, setError] = useState(''); 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const redirect_url = location.state?.from || '/'; //when there will be no location, it will be home route
    //console.log('came from:', location.state?.from);

    //func to handle google sign in
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
       })
    }

    //handle email input
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //handle pass input
    const handlePassChange = e => {
      setPass(e.target.value);
    }

    //func to handle email pass login
    const handleEmailLogin = e => {
        e.preventDefault();
        signInUsingEmailAndPass(email, pass)
        .then(result => {
            history.push(redirect_url);
        })
        .catch(error => {
            setError(error.message);
        });
    }

    return (
        <div>
        <form onSubmit={handleEmailLogin} className="container col-md-6 mt-5  fw-normal">
        {
            error ? <div className="alert alert-danger" role="alert">
            {error}
            </div> : ''
        }
        <div className="mb-3" controlId="formBasicEmail">
            <label>Email address</label>
            <input onBlur={handleEmailChange} className="form-control" type="email" placeholder="Enter email" required/>
        </div>

        <div className="mb-3" controlId="formBasicPassword">
            <label>Password</label>
            <input onBlur={handlePassChange} className="form-control" type="password" placeholder="Password" required/>
        </div>
        <div className="mb-3" controlId="formBasicCheckbox">
            <label>Not a member!</label>
            <Link to="/signup"> <span> SignUp</span> </Link>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
        <div className="container col-md-6"> 
            <p className="pt-3">-----or-----</p>
            <button onClick={handleGoogleLogin} type="submit" className="btn btn-warning">Sign In with Google</button>
        </div>
        </div>
    );
};

export default Login;