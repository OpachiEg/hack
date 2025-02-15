import {AxiosResponse} from "axios";
import {ScheduleResult, SearchResult} from "../types";
import {AxiosUtils} from "../../../lib/axios";

export const API = {
    search(query: string): Promise<AxiosResponse<Array<SearchResult>>> {
        return AxiosUtils.getBaseInstance().get(`/group/search?search=${query}`)
    },
    getSchedule(startAt: string,endAt: string,result: SearchResult): Promise<AxiosResponse<ScheduleResult>> {

        let queryParam = null;
        switch (result.type) {
            case "group":
                queryParam = "group_name";
                break;
            case "room":
                queryParam = "classroom_number";
                break;
            case "teacher":
                queryParam = "teacher_id";
                break;
        }

        return AxiosUtils
            .getBaseInstance()
            .get(
                `/schedule/search?start_date=${startAt}&end_date=${endAt}&${queryParam + "=" + result.value}`
            )
    }
};