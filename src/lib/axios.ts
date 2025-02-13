import axios, { AxiosInstance } from "axios";

const baseInstance = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 5000
});

export const AxiosUtils = {
    getBaseInstance(): AxiosInstance {
        return baseInstance;
    }
};