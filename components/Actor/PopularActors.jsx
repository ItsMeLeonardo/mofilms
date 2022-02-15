import { Spacer } from "@nextui-org/react";

import HorizontalList from "../../components/HorizontalList";
import { popularActors } from "../../utils/ex";
import ActorCard from "./ActorCard";

export default function PopularActors() {
  return (
    <>
      <Spacer />
      <h2>Popular Actors</h2>
      <Spacer />
      <HorizontalList gap={3}>
        {popularActors.map((actor) => (
          <ActorCard key={actor.id} {...actor} />
        ))}
      </HorizontalList>
    </>
  );
}
