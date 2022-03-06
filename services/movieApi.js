import axios from "axios";

const headersList = {
  Accept: "*/*",
};

export const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: headersList,
  params: {
    api_key: process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY,
  },
});
