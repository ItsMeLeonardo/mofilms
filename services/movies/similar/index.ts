import { movieApi } from "services/movieApi";
import { MoviesSimilarResponse } from "./types";

const params = { language: "en-US", page: 1 };

export const similar = async (id: string): Promise<MoviesSimilarResponse> => {
  if (!id) throw new Error("id is required");

  const response = await movieApi.get<MoviesSimilarResponse>(
    `/movie/${id}/recommendations`,
    {
      params,
    }
  );
  return response.data;
};
