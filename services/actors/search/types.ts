import { GenericActor } from "services/actors/types";

export interface ActorSearchResponse {
  page: number;
  results: GenericActor[];
  total_pages: number;
  total_results: number;
}
