import React, { useState } from "react";
import axios from 'axios';
import '../CSS/Log-RegFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, setUser } from "../Redux/actions";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login(true));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email,
            password
        };

        if (email.trim() === '' || password.trim() === '') {
            // Handle the case when any field is empty
            setErrorMessage('Please fill in all the fields');
            setShowErrorMessage(true);

            return;
        }

        const result = sendDataToBackend(formData);

        setErrorMessage('');
        setShowErrorMessage(false);

        setEmail('');
        setPassword('');

        console.log(result);
    }

    const sendDataToBackend = (formData) => { //return user  object from backend and save to store!
        var result = 1;
        axios.post('http://localhost:8080/api/login', formData)
            .then(response => {
                // Handle successful response from the backend
                console.log("From API " + response.data);
                if (response.data != null) {
                    console.log('Dashboard Page');
                    const userObject = response.data;

                    dispatch(setUser(userObject));
                    // handleLogin();
                    navigate('/dashboard');
                    // toast.success('Login Sucuessful', { position: toast.POSITION.TOP_RIGHT });
                }
                else {
                    setErrorMessage('Incorrect Credentials');
                    setShowErrorMessage(true);
                }

                //console.log('Data sent to the backend successfully');

                // Do something with the response if needed
            })
            .catch(error => {
                // Handle error
                console.error('Error sending data to the backend:', error);
                // Handle the error condition appropriately
            });

        return result;
    }


    return (
        <div className="auth-form-container card">
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

            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@domain.com" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button>Log In</button>
                <ToastContainer />
            </form>
            <Link to='/register'>
                <button className="link-btn">Dont have an account? Click here to register!</button>
            </Link>

        </div>
    )
}