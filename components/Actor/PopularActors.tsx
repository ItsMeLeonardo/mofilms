import { Spacer } from "@nextui-org/react";

//components
import HorizontalList from "components/HorizontalList";
import ActorCard from "./ActorCard";
//types
import { PopularActorsProps } from "./types";

export default function PopularActors({
  actors = [],
}: PopularActorsProps = {}) {
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
