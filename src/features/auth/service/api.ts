import {AxiosUtils} from "../../../lib/axios";
import {AxiosResponse} from "axios";

export const API = {
  login(data: FormData): Promise<AxiosResponse<{access_token: string}>> {
      return AxiosUtils.getBaseInstance().post("/students/login",data);
  }
};