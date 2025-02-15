import axios, {AxiosError, AxiosInstance} from "axios";
import {showMessage} from "../components/alert/Alert";

const baseInstance = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 5000
});

baseInstance.interceptors.response.use(null,(error: AxiosError) => {

    if(isNetworkError(error) || (error.status && error.status>=500)) {
        showMessage("Ошибка: Что-то пошло не так попробуйте ещё раз")
    }

    return Promise.reject(error);
});

function isNetworkError(error: AxiosError) {
    if (error.response) {
        return false;
    }
    if (!error.code) {
        return false;
    }
    if (error.code === "ERR_CANCELED") {
        return false;
    }
    return true;
}

export const AxiosUtils = {
    getBaseInstance(): AxiosInstance {
        return baseInstance;
    }
};
