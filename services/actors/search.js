import { movieApi } from "../movieApi";

export const search = async (query) => {
  if (!query || query.trim().length === 0) {
    throw new Error("Search query is required");
  }
  const params = { query, language: "en-US", page: 1 };
  const response = await movieApi.get("/search/person", { params });
  return response.data;
};
