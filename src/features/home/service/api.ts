import {Axios, AxiosResponse} from "axios";
import {NewsInfo} from "../types";
import {AxiosUtils} from "../../../lib/axios";

export const API = {
    loadNews(page: number,size: number): Promise<AxiosResponse<Array<NewsInfo>>> {
        return AxiosUtils.getBaseInstance().get(`/news/?page=${page}&size=${size}`)
    },
    loadVacancies(size: number): Promise<AxiosResponse<Array<{vacancy_name: string,company_name: string}>>> {
        return AxiosUtils.getBaseInstance().get("/job/?limit=" + size);
    },
    loadReminders(size: number): Promise<AxiosResponse<Array<{title: string,event_datetime: string}>>> {
        return AxiosUtils.getBaseInstance().get("/reminders/?limit=" + size);
    },
    loadMarks(size: number): Promise<AxiosResponse<Array<{discipline_name: string,mark: number,mark_type: string}>>> {
        return AxiosUtils.getBaseInstance().get("/progress/marks?student_id=1&limit=" + size);
    },
};