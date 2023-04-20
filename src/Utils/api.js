import axios from "axios";
// import axiosWithAuth from "./../axiosWithAuth";

const baseURL = 'https://localhost/';


export const fetchConnection = async (user_id) => {

    let data = new FormData();

    let data_object = {
        'glid': user_id
    }
    for (const [key, value] of Object.entries(data_object)) {
        data.append(key, value)
    }
    try {
        const response =
            await axios.post(`${baseURL}/fetch`, data);
        return await response.data;
    } catch (err) {
        console.log(`Error: ${err.response.data.message}`);
        throw err;
    }
};

export const makeConnection = async (payload) => {

    let data_object = JSON.parse(payload)

    let data = new FormData();

    for (const [key, value] of Object.entries(data_object)) {
        data.append(key, value)
    }
    try {
        const response =
            await axios.post(`${baseURL}/post`, data);
        return await response.data;
    } catch (err) {
        console.log(`Error: ${err.response.data.message}`);
        throw err;
    }
};
