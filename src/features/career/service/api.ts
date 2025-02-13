import {Axios, AxiosResponse} from "axios";
import {AxiosUtils} from "../../../lib/axios";

export const API = {
    loadLinks(linkType: "Помощь с резюме" | "Полезные" | "СДО",size: number): Promise<AxiosResponse<Array<{title: string,url: string}>>> {
        return AxiosUtils.getBaseInstance().get(`/students/links/?links_types=${linkType}&limit=${size}`);
    }
};