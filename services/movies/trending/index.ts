import { movieApi } from "services/movieApi";
import { MoviesTrendingResponse } from "./types";

export const trending = async (): Promise<MoviesTrendingResponse> => {
  const { data } = await movieApi.get<MoviesTrendingResponse>(
    "/trending/movie/day"
  );
  return data;
};
