import { movieApi } from "../movieApi";

export const video = async (movieId) => {
  const { data } = await movieApi.get(`/movie/${movieId}/videos`);
  const trailer = data.results.find((video) => {
    return video.type === "Trailer";
  });
  return trailer;
};
