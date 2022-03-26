import { movieApi } from "services/movieApi";
import { MovieDetailResponse } from "./types";

export const details = async (
  id: string,
  append: string | [string] = ""
): Promise<MovieDetailResponse> => {
  if (!id) {
    throw new Error("No id provided");
  }

  if (typeof append !== "string" && !Array.isArray(append)) {
    //FIXME: possible delete this :F
    throw new Error(
      "Invalid append, append should be a string or an array of strings"
    );
  }

  const append_to_response = Array.isArray(append) ? append.join(",") : append;

  const params = { language: "en-US", append_to_response };

  const response = await movieApi.get<MovieDetailResponse>(`/movie/${id}`, {
    params,
  });
  return response.data;
};
