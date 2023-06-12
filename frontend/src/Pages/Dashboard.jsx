import React, { useState } from "react";
import '../CSS/DashboardStyle.css';
import { useSelector } from 'react-redux';
import { Modal } from '../Components/Modal';

export const Dashboard = (props) => {
    const user = useSelector((state) => state.user);
    const [openModal, setOpenModal] = useState(false);
    const [modalResponse, setModalResponse] = useState('');

    const handleModal = (response) => {
        setModalResponse(response);
        setOpenModal(false);
        console.log("Modal Response: " + modalResponse);
        // setModalResponse('');
    }

    // useEffect(() => {
    //     getUserData()
    // }, [])

    return (
        <div className="dashboard">
            <Modal open={openModal} onClose={handleModal} />
            <h2>Dashboard Page</h2>
            <h3>Welcome {user.firstName} {user.lastName}</h3>
            <div className="container">
                <div className="column">
                    <div className="boxes">
                        <p>Checking</p>
                        <ul>
                            <li>{user.email}</li>
                            <li>{user.checkingAccount}</li>
                        </ul>
                        {/* <button onClick={() => setOpenModal(true)}>Make a Deposit</button> */}
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
                <div className="column">
                    <div className="btnBoxes">
                        <div>
                            <button className="btnStyle" onClick={() => setOpenModal(true)}>Make a Deposit</button>
                            <button className="btnStyle">Make a Withdrawl</button>
                        </div>
                    </div>
                    <div className="btnBoxes">
                        <div>
                            <button className="btnStyle">Make a Deposit</button>
                            <button className="btnStyle">Make a Withdrawl</button>
                        </div>
                    </div>
                    <div className="btnBoxes">
                        <div>
                            <button className="btnStyle">Check Credit Score</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}