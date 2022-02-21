import { movieApi } from "../movieAPI";

const params = {
  language: "en-US",
  page: 1,
};

export const popular = async () => {
  const { data } = await movieApi.get("/movie/popular", { params });
  return data;
};
