import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:8080/"
});

export const post = (url, data) => {
    return client.post(url, data)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error("Axios caught an error: " + error);
            throw error;
        })
}