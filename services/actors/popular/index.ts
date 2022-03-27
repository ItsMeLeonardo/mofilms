import { movieApi } from "services/movieApi";
import { ActorPopularResponse } from "./types";

const params = { language: "en-US", page: 1 };

export const popular = async (): Promise<ActorPopularResponse> => {
  const { data } = await movieApi.get<ActorPopularResponse>("/person/popular", {
    params,
  });
  return data;
};
