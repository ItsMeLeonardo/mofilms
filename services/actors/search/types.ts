import { KnownFor } from "services/actors/types/knowFor";

export interface ActorSearchResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  gender: number;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: null | string;
}
