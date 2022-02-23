import { movieApi } from "../movieApi";

const params = { language: "en-US", page: 1 };

export const similar = async (id) => {
  if (!id) throw new Error("id is required");

  const response = await movieApi.get(`/movie/${id}/recommendations`, {
    params,
  });
  return response.data;
};
