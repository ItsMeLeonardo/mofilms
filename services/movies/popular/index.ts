import { movieApi } from "services/movieApi";
import { MoviePopularResponse } from "./types";

const params = {
  language: "en-US",
  page: 1,
};

export const popular = async (): Promise<MoviePopularResponse> => {
  const { data } = await movieApi.get<MoviePopularResponse>("/movie/popular", {
    params,
  });
  return data;
};
