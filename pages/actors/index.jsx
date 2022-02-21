import { Row, Spacer, Text, Grid, Col, Input } from "@nextui-org/react";
import { Search } from "react-iconly";

import PopularActors from "../../components/Actor/PopularActors";
import ActorCard from "../../components/Actor/ActorCard";

import actorService from "../../services/actors";

const defaultActor = {
  adult: false,
  gender: 2,
  id: 1136406,
  known_for: [
    {
      adult: false,
      backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
      genre_ids: [12, 28, 878],
      id: 299536,
      media_type: "movie",
      original_language: "en",
      original_title: "Avengers: Infinity War",
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      release_date: "2018-04-25",
      title: "Avengers: Infinity War",
      video: false,
      vote_average: 8.3,
      vote_count: 23946,
    },
    {
      adult: false,
      backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      genre_ids: [12, 878, 28],
      id: 299534,
      media_type: "movie",
      original_language: "en",
      original_title: "Avengers: Endgame",
      overview:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      release_date: "2019-04-24",
      title: "Avengers: Endgame",
      video: false,
      vote_average: 8.3,
      vote_count: 20386,
    },
    {
      adult: false,
      backdrop_path: "/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
      genre_ids: [12, 28, 878],
      id: 271110,
      media_type: "movie",
      original_language: "en",
      original_title: "Captain America: Civil War",
      overview:
        "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
      poster_path: "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
      release_date: "2016-04-27",
      title: "Captain America: Civil War",
      video: false,
      vote_average: 7.4,
      vote_count: 19388,
    },
  ],
  known_for_department: "Acting",
  name: "Tom Holland",
  popularity: 135.187,
  profile_path: "/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
};

export default function Actors({ popularActors = [] } = {}) {
  return (
    <>
      <PopularActors actors={popularActors} />
      <Spacer />

      <Col align="center" justify="center">
        <Text h2 css={{ textGradient: "$gradRed" }} weight="bold">
          Search an Actor
        </Text>

        <Row align="center" justify="center">
          <Input
            type="search"
            placeholder="Brad Pitt"
            contentRight={<Search />}
            fullWidth
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
          <ActorCard {...defaultActor} advanced />
        </Grid.Container>
      </Col>
      <style jsx>{`
      span {
        position: "absolute",
        width: "100%",
        display: "flex",
        justify-content: "center",
      }
        `}</style>
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
