import { movieApi } from "../movieAPI";

const params = {
  language: "en-US",
  sort_by: "popularity.desc",
  include_adult: false,
  include_video: false,
  page: 1,
  year: "2022",
  with_watch_monetization_types: "flatrate",
};

export const popular = async () => {
  const { data } = await movieApi.get("/discover/movie", { params });
  return data;
};
