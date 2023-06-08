import React, { useState, useEffect } from "react";
import '../CSS/Modal.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const Modal = ({ open, onClose }) => {
    const [amount, setAmount] = useState('')
    if (!open)
        return null;

    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => { e.stopPropagation() }} className="modalContainer"> {/*stoppropogration used  to close modal when you click in the outside space, without it if you click anywhere incluing on the modal it would close which we do not want */}
                <p className="closeBtn" onClick={onClose}>X</p>
                <label>Deposit Amount:</label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" name="depositAmount" />
                <div className="btnContainer">
                    <button className="btnPrimary"><span className="bold">Submit Deposit</span></button>
                    <button className="btnCancel"><span className="bold">Cancel</span></button>
                </div>

            </div>
        </div>
    )
}