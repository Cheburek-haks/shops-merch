import axios from "axios";
import { IProfessions } from "../types/Types";

const API_URL = "http://localhost:8080/api";

axios.defaults.baseURL = API_URL;

export const ApiService = {
  async getAll(name: string) {
    return axios.get<IProfessions[]>("/" + name);
  },
};
