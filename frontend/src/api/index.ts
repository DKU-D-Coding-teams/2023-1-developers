import axios from "axios";

// axios.defaults.baseURL = "http://3.39.41.33:8080";

export const postEmailCheck = (email: string) =>
  axios.post("/members/mailCheck", {
    email,
  });
