import { GenericActor } from "services/actors/types";
export interface ActorPopularResponse {
  page: number;
  results: GenericActor[];
  total_pages: number;
  total_results: number;
}
