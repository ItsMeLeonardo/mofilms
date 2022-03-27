import { movieApi } from "services/movieApi";
import { MovieVideoResponse, Result as VideoResult } from "./types";

export const video = async (movieId: string): Promise<VideoResult> => {
  const { data } = await movieApi.get<MovieVideoResponse>(
    `/movie/${movieId}/videos`
  );
  const trailer = data.results.find((video) => {
    return video.type === "Trailer";
  });
  return trailer;
};
