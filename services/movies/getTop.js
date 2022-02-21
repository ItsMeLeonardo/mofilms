import { movieApi } from "../movieApi";

const params = {
  language: "en-US",
  sort_by: "popularity.desc",
  include_adult: false,
  include_video: false,
  page: 1,
  year: "2022",
  with_watch_monetization_types: "flatrate",
};

export const topMovies = async () => {
  const { data } = await movieApi.get("/discover/movie", { params });
  return data;
};
