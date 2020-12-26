import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
    baseURL,
    params: {
        appid: process.env.REACT_APP_API_KEY,
    }
});

export default axiosInstance;