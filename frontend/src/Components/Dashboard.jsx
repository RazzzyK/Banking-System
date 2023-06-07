import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const Dashboard = (props) => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     getUserData()
    // }, [])

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