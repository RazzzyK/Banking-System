import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const Home = (props) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }

    return (
        <div className="auth-form-container">
            <h2>Home Page</h2>
            <Link to='/login'>
                <button>Log In</button>
            </Link>
            <Link to={'/register'}>
                <button>Register</button>
            </Link>
        </div>
    )
}