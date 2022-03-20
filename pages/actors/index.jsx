import { Row, Spacer, Text, Grid, Col, Input } from "@nextui-org/react";
import { Search } from "react-iconly";

import PopularActors from "../../components/Actor/PopularActors";
import ActorCard from "../../components/Actor/ActorCard";
import { debounce } from "../../utils/debounce";
import { useSearch } from "../../hooks/useSearch";
import actorService from "../../services/actors";

export default function Actors({ popularActors = [] } = {}) {
  const { data: actors, search, isLoading } = useSearch("actor");

  const handleChange = (event) => {
    const keyword = event.target.value;
    search({ keyword });
  };

  const debouncedHandleChange = debounce(handleChange, 600);

  return (
    <>
      <PopularActors actors={popularActors} />
      <Spacer />

      <div>
        <Text h2 css={{ textGradient: "$gradRed" }} weight="bold">
          Search an Actor
        </Text>

        <Row align="center" justify="center">
          <Input
            type="search"
            placeholder="Brad Pitt"
            contentRight={<Search />}
            fullWidth
            onChange={debouncedHandleChange}
            css={{ maxW: "400px" }}
          />
        </Row>
        <Spacer />

        <Grid.Container
          gap={1}
          align="center"
          justify="center"
          css={{ w: "100%" }}
        >
          {isLoading && <div>loading</div>}
          {actors &&
            actors.map((actor) => (
              <ActorCard key={actor.id} {...actor} advanced />
            ))}
        </Grid.Container>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export async function getServerSideProps() {
  const { results: popularActors } = await actorService.popular();
  return {
    props: {
      popularActors,
    },
  };
}
