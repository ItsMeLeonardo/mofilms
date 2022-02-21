import { movieApi } from "../movieApi";

export const trending = async () => {
  const { data } = await movieApi.get("/trending/movie/day");
  return data;
};
