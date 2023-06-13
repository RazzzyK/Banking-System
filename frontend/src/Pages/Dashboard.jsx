import React, { useState } from "react";
import '../CSS/DashboardStyle.css';
import { useSelector } from 'react-redux';
import { Modal } from '../Components/Modal';

export const Dashboard = (props) => {
    const user = useSelector((state) => state.user);
    const [openModal, setOpenModal] = useState(false);
    // const [modalResponse, setModalResponse] = useState('');
    const [clickedButton, setClickedButton] = useState("");

    const handleModal = (response, button) => {
        // setModalResponse(response);
        setClickedButton(button)
        setOpenModal(false);
    }

    return (
        <div className="dashboard">
            <Modal open={openModal} onClose={handleModal} buttonClicked={clickedButton} />
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
                            <button className="btnStyle" onClick={() => {
                                setOpenModal(true);
                                setClickedButton("DepositChecking");;
                            }}>
                                Make a Deposit
                            </button>
                            <button className="btnStyle" onClick={() => {
                                setOpenModal(true);
                                setClickedButton("WithdrawalChecking");;
                            }}>
                                Make a Withdrawl
                            </button>
                        </div>
                    </div>
                    <div className="btnBoxes">
                        <div>
                            <button className="btnStyle" onClick={() => {
                                setOpenModal(true);
                                setClickedButton("DepositSaving");;
                            }}>
                                Make a Deposit
                            </button>
                            <button className="btnStyle" onClick={() => {
                                setOpenModal(true);
                                setClickedButton("WithdrawalSaving");;
                            }}>
                                Make a Withdrawl
                            </button>
                        </div>
                    </div>
                    <div className="btnBoxes">
                        <div>
                            <button className="btnStyle">Check Credit Score</button>  {/*no functionality yet */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}