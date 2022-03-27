import { KnownFor } from "services/actors/types/knowFor";
export interface ActorPopularResponse {
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
  known_for_department: KnownForDepartment;
  name: string;
  popularity: number;
  profile_path: string;
}

export enum KnownForDepartment {
  Acting = "Acting",
}
