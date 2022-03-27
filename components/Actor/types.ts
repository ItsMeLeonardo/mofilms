import { GenericActor } from "services/actors/types";
import { KnownFor } from "services/actors/types/knowFor";

export interface PopularActorsProps {
  actors?: GenericActor[];
}

export interface ActorCardProps {
  actor: GenericActor;
  advancedData?: boolean;
}

export interface ActorInfoCardProps {
  actor: GenericActor;
  movies?: KnownFor[];
}
