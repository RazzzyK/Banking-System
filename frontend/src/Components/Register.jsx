import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password
        };
        // Send the data to the backend (e.g., using an API)


        if (email.trim() === '' || password.trim() === '' || firstName.trim() === '' || lastName.trim() === '') {
            // Handle the case when any field is empty
            setErrorMessage('Please fill in all the fields');
            setShowErrorMessage(true);

            return;
        }

        sendDataToBackend(formData);
        props.onFormSwitch('login');

        setErrorMessage('');
        setShowErrorMessage(false);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');


    }

    const sendDataToBackend = (formData) => {
        axios.post('http://localhost:8080/api/endpoint', formData)
            .then(response => {
                // Handle successful response from the backend
                console.log('Data sent to the backend successfully');
                console.log(response.data);
                // Do something with the response if needed
            })
            .catch(error => {
                // Handle error
                console.error('Error sending data to the backend:', error);
                // Handle the error condition appropriately
            });
    }

    return (
        <div className="auth-form-container">
            {showErrorMessage && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowErrorMessage(false)}>
                            &times;
                        </span>
                        <p>{errorMessage}</p>
                    </div>
                </div>
            )}

            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" id="firstName" placeholder="First Name" />
                <label>Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" id="lastName" placeholder="Last Name" />

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@domain.com" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button onClick={handleSubmit}>Register</button>

            </form>
            <Link to='/login'>
                <button className="link-btn">Already have an account? Login here!</button>
            </Link>

        </div>
    )

}