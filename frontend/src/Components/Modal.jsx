import React, { useState, useEffect } from "react";
import '../CSS/Modal.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../Redux/actions";

export const Modal = ({ open, onClose }) => {
    const [amount, setAmount] = useState('')
    const getUser = useSelector(state => state.user)
    const email = getUser.email;
    const dispatch = useDispatch();

    if (!open)
        return null;

    const handleSubmit = () => {
        onClose(amount);

        const data = {
            email,
            amount
        };

        axios.post('http://localhost:8080/api/updatechecking', data)
            .then(response => {
                // Handle successful response from the backend
                console.log("From Update API " + response.data);
                const userObject = response.data;
                dispatch(setUser(userObject));
                // if (response.data != null) {
                //     console.log('Dashboard Page');
                // }
            })
            .catch(error => {
                // Handle error
                console.error('Error sending data to the backend:', error);
                // Handle the error condition appropriately
            });

        setAmount('');
    }

    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => { e.stopPropagation() }} className="modalContainer"> {/*stoppropogration used  to close modal when you click in the outside space, without it if you click anywhere incluing on the modal it would close which we do not want */}
                <label>Deposit Amount:</label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" name="depositAmount" />
                <div className="btnContainer">
                    <button className="btnPrimary" onClick={handleSubmit}><span className="bold">Submit Deposit</span></button>
                    <button className="btnCancel" onClick={onClose}><span className="bold">Cancel</span></button>
                </div>
            </div>
        </div>
    )
}