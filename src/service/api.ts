import {AxiosResponse} from "axios";
import {UserShortInfo} from "../types";
import {AxiosUtils} from "../lib/axios";

export const API = {
    getUserShortInfo(): Promise<AxiosResponse<UserShortInfo>> {
        return AxiosUtils.getBaseInstance().get("/students/info")
    }
};