import axios from "axios";
import { IData } from "../types";

const API = axios.create({ baseURL: "http://localhost:5000/feedbacks" });

export const createFeedback = async (data: IData) => {
  await API.post("/", data);
};
