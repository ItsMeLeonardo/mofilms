import { Spacer } from "@nextui-org/react";

import HorizontalList from "../../components/HorizontalList";
import ActorCard from "./ActorCard";

export default function PopularActors({ actors = [] } = {}) {
  return (
    <>
      <Spacer />
      <h2>Popular Actors</h2>
      <Spacer />
      <HorizontalList gap={3}>
        {actors.map((actor) => (
          <ActorCard key={actor.id} {...actor} />
        ))}
      </HorizontalList>
    </>
  );
}
