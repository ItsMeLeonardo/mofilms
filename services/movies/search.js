import { movieApi } from "../movieApi";

export const search = async (keyword) => {
  if (!keyword || keyword.trim().length === 0) {
    throw new Error("Keyword is required");
  }

  const params = {
    query: keyword,
  };

  const response = await movieApi.get("/search/movie", { params });
  return response.data;
};
