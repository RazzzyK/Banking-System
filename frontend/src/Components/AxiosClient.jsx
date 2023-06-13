import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:8080/"
});

export const depositing = async (url, data) => {
    const received = await client.post(url, data);

    return received;
}