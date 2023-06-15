import React, { useState } from "react";
import '../CSS/Modal.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../Redux/actions";
import { post } from "./AxiosClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Modal = ({ open, onClose, buttonClicked }) => {
    const [amount, setAmount] = useState('')
    const getUser = useSelector(state => state.user)
    const email = getUser.email;
    const dispatch = useDispatch();
    const data = {
        email,
        amount
    };

    if (!open)
        return null;

    const handleSubmit = async () => {
        onClose(amount);

        switch (buttonClicked) {
            case 'DepositChecking':
                try {
                    const response = await post('api/depositchecking', data);
                    toast.success('Successful Deposit into checking account!', { position: toast.POSITION.TOP_RIGHT });
                    dispatch(setUser(response.data));  //Saves to store

                } catch (error) {
                    console.error('Error sending data to the backend:', error);
                }
                setAmount('');
                break;
            case 'WithdrawalChecking':
                try {
                    const response = await post('api/withdrawalchecking', data);
                    toast.success('Successful Withdrawal from checking account!', { position: toast.POSITION.TOP_RIGHT });
                    dispatch(setUser(response.data));  //Saves to store
                } catch (error) {
                    console.error('Error sending data to the backend:', error);
                }
                setAmount('');
                break;
            case 'DepositSaving':
                try {
                    const response = await post('api/depositsaving', data);
                    toast.success('Successful Deposit into savings account!', { position: toast.POSITION.TOP_RIGHT });
                    dispatch(setUser(response.data));  //Saves to store
                } catch (error) {
                    console.error('Error sending data to the backend:', error);
                }
                setAmount('');
                break;
            case 'WithdrawalSaving':
                try {
                    const response = await post('api/withdrawalsaving', data);
                    toast.success('Successful Withdrawal from savings account!', { position: toast.POSITION.TOP_RIGHT });
                    dispatch(setUser(response.data));  //Saves to store
                } catch (error) {
                    console.error('Error sending data to the backend:', error);
                }
                setAmount('');
                break;
            default:
                setAmount('');
        }
    }

    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => { e.stopPropagation() }} className="modalContainer"> {/*stoppropogration used  to close modal when you click in the outside space, without it if you click anywhere incluing on the modal it would close which we do not want */}
                <label>Amount:</label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" name="amount" />
                <div className="btnContainer">
                    <button className="btnPrimary" onClick={handleSubmit}><span className="bold">Submit</span></button>
                    <ToastContainer />
                    <button className="btnCancel" onClick={onClose}><span className="bold">Cancel</span></button>
                </div>
            </div>
        </div>
    )
}