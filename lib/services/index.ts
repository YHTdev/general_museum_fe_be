import axios from "axios";

export const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_NEXTAPI_URL}`,
  withCredentials: true,
});
