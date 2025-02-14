import {AxiosResponse} from "axios";
import {SearchResult} from "../types";
import {AxiosUtils} from "../../../lib/axios";

export const API = {
    search(query: string): Promise<AxiosResponse<Array<SearchResult>>> {
        return AxiosUtils.getBaseInstance().get(`/group/search?search=${query}`)
    }
};