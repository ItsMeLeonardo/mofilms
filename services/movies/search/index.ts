import { movieApi } from "services/movieApi";
import { MovieSearchResponse } from "./types";

export const search = async (keyword: string): Promise<MovieSearchResponse> => {
  if (!keyword || keyword.trim().length === 0) {
    throw new Error("Keyword is required");
  }
  const params = {
    query: keyword,
  };

  const response = await movieApi.get<MovieSearchResponse>("/search/movie", {
    params,
  });

  return response.data;
};
