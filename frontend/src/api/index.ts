import axios from "axios";
import { RegisterParams } from "./params";

// axios.defaults.baseURL = "http://3.39.41.33:8080";

export const postEmailCheck = (email: string) => axios.post("/members/mailCheck", JSON.stringify({ email }));

export const postMemberRegister = (data: RegisterParams) => axios.post("/members/join", JSON.stringify(data));

export const postMemberLogin = (email: string, password: string) =>
  axios.post("/members/login", JSON.stringify({ email, password }));
