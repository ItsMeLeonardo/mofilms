import { KnownFor } from "./knowFor";

export interface GenericActor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: KnownForDepartment;
  known_for: KnownFor[];
  name: string;
  popularity: number;
  profile_path: string;
}

export enum KnownForDepartment {
  Acting = "Acting",
}
