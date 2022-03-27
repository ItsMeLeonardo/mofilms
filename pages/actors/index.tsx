import { Row, Spacer, Text, Grid, Input } from "@nextui-org/react";
import Head from "next/head";
import { Search } from "react-iconly";

import PopularActors from "components/Actor/PopularActors";
import ActorCard from "components/Actor/ActorCard";
import { debounce } from "utils/debounce";
import { useActorSearch } from "hooks/useActorSearch";
import actorService from "services/actors";

export default function Actors({ popularActors = [] } = {}) {
  const { data: actors, search, isLoading } = useActorSearch();

  const handleChange = (event) => {
    const keyword = event.target.value;
    search({ keyword });
  };

  const debouncedHandleChange = debounce(handleChange, 600);

  return (
    <>
      <Head>
        <title>Actors</title>
        <meta
          name="description"
          content="The most popular actors of this week"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
