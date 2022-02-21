import { movieApi } from "../movieApi";

const params = { language: "en-US", page: 1 };

export const popular = async () => {
  const { data } = await movieApi.get("/person/popular", { params });
  return data;
};
