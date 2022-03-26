import { movieApi } from "services/movieApi";
import { MovieCreditsResponse } from "./types";

export const credits = async (id: string): Promise<MovieCreditsResponse> => {
  if (!id) throw new Error("No id provided");
  const response = await movieApi.get<MovieCreditsResponse>(
    `/movie/${id}/credits`
  );
  return response.data;
};
