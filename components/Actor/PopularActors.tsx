import { Spacer } from "@nextui-org/react";
import useSWR from "swr";
//components
import HorizontalList from "components/HorizontalList";
import ActorCard from "./ActorCard";
import ActorCardListLoader from "./ActorSearcher/loaders";
//types
import { ActorPopularResponse } from "services/actors/popular/types";

export const swrActorPopularKey = "actors/popular";

export default function PopularActors() {
  const { data } = useSWR<ActorPopularResponse>(swrActorPopularKey);
  if (!data) return <ActorCardListLoader length={5} />;

  const actors = data.results;

  return (
    <>
      <Spacer />
      <h2>Popular Actors</h2>
      <Spacer />
      <HorizontalList gap={3}>
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </HorizontalList>
    </>
  );
}
