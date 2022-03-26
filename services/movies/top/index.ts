import { movieApi } from "services/movieApi";
import { MovieTopResponse, MovieTopParams } from "./types";

const params: MovieTopParams = {
  language: "en-US",
  sort_by: "popularity.desc",
  include_adult: false,
  include_video: false,
  page: 1,
  year: "2022",
  with_watch_monetization_types: "flatrate",
};

export const topMovies = async (): Promise<MovieTopResponse> => {
  const { data } = await movieApi.get<MovieTopResponse>("/discover/movie", {
    params,
  });
  return data;
};
