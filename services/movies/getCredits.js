import { movieApi } from "../movieApi";

export const credits = async (id) => {
  if (!id) throw new Error("No id provided");
  const response = await movieApi.get(`/movie/${id}/credits`);
  return response.data;
};
