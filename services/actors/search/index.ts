import { movieApi } from "services/movieApi";
import { ActorSearchResponse } from "./types";

export const search = async (
  query: string = ""
): Promise<ActorSearchResponse> => {
  if (query.trim().length === 0) {
    throw new Error("Search query is required");
  }
  const params = { query, language: "en-US", page: 1 };
  const response = await movieApi.get<ActorSearchResponse>("/search/person", {
    params,
  });
  return response.data;
};
