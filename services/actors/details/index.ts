import { movieApi } from "services/movieApi";
import { ActorDetailsResponse } from "./types";

export const details = async (id: string): Promise<ActorDetailsResponse> => {
  if (id.trim().length === 0) {
    throw new Error("Search id is required");
  }

  const response = await movieApi.get<ActorDetailsResponse>(`/person/${id}`);
  return response.data;
};
