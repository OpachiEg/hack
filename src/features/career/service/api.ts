import {Axios, AxiosResponse} from "axios";
import {AxiosUtils} from "../../../lib/axios";
import {VacancyInfo} from "../types";

export const API = {
    loadLinks(linkType: "Помощь с резюме" | "Полезные" | "СДО",size: number): Promise<AxiosResponse<Array<{title: string,url: string}>>> {
        return AxiosUtils.getBaseInstance().get(`/students/links/?links_types=${linkType}&limit=${size}`);
    },
    searchVacancies(query: string,page: number,size: number): Promise<AxiosResponse<Array<VacancyInfo>>> {
        return AxiosUtils.getBaseInstance().get(`/job/vacancies?search=${query}&page=${page}&size=${size}`)
    }
};