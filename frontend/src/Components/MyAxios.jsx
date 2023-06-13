import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUser } from "../Redux/actions";

const MyAxios = ({ data, onDataReceived }) => {
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    // const url = props.data.url;
    // const data = props.data.data;
    console.log("Data: " + data.data)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const fullurl = 'http://localhost:8080/' + data.url;
                const response = await axios.post(fullurl, data.data);
                console.log("Here" + response.data);
                setResponseData(response.data);
                onDataReceived(response.data); // Invoke the callback with the data
                setLoading(false);
            } catch (error) {
                // setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [data, onDataReceived]);

    // return (
    //     // <div>
    //     //     {loading && <p>Loading...</p>}
    //     //     {responseData && <p>{JSON.stringify(responseData)}</p>}
    //     //     {/* {error && <p>Error: {error}</p>} */}
    //     // </div>
    // );
};

MyAxios.propTypes = {
    url: PropTypes.string.isRequired,
    onDataReceived: PropTypes.func.isRequired,
};

export default MyAxios;