import axios from "axios";
import { IProfessions } from "../types/Types";

const API_URL = "https://store.kod06.ru/api";

axios.defaults.baseURL = API_URL;

export const ApiService = {
  async getAll(name: string) {
    return axios.get<IProfessions[]>("/" + name);
  },
  async setAvtorization() {
    return axios.get("/products");
  },
};
