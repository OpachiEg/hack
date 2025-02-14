import {AxiosResponse} from "axios";
import {ProgressInfo} from "../types";
import {AxiosUtils} from "../../../lib/axios";

export const API = {
    loadProgress(studentId: number,semester: number): Promise<AxiosResponse<Array<ProgressInfo>>> {
        return AxiosUtils.getBaseInstance().get(`/progress/?student_id=${studentId}&semestr=${semester}`)
    }
};