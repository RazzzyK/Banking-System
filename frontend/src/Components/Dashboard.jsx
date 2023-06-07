import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../Redux/actions";


export const Dashboard = (props) => {
    // const [email, setEmail] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [checking, setChecking] = useState('');
    // const [saving, setSaving] = useState('');
    // const [creditcard, setCreditCard] = useState('');
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = (formData) => {
        var result = 1;
        axios.get('http://localhost:8080/api/getdetails')
            .then(response => {
                // Handle successful response from the backend
                const userObject = response.data;
                // setEmail(userObject.email);
                // setFirstName(userObject.firstName);
                // setLastName(userObject.lastName);
                // setChecking(userObject.checkingAccount);
                // setSaving(userObject.savingsAccount);
                // setCreditCard(userObject.creditCard);
                // setUser(userObject);
                //console.log('Data sent to the backend successfully');
                dispatch(setUser(userObject));
                console.log(userObject.checkingAccount);
                // Do something with the response if needed
            })
            .catch(error => {
                // Handle error
                console.error('Error sending data to the backend:', error);
                // Handle the error condition appropriately
            });
    }

    return (
        <div className="dashboard">
            <h2>Dashboard Page</h2>
            <h3>Welcome {user.firstName} {user.lastName}</h3>
            <div className="boxes">
                <p>Checking</p>
                <ul>
                    <li>{user.email}</li>
                    <li>{user.checkingAccount}</li>
                </ul>
            </div>
            <div className="boxes">
                <p>Savings</p>
                <ul>
                    <li>{user.savingsAccount}</li>
                </ul>
            </div>
            <div className="boxes">
                <p>Credit Card</p>
                <ul>
                    <li>{user.creditCard}</li>
                </ul>
            </div>
        </div>
    )
}