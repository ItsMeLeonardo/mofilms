import { Row, Spacer, Text, Grid, Col, Input } from "@nextui-org/react";
import { Search } from "react-iconly";

import PopularActors from "../../components/Actor/PopularActors";
import ActorCard from "../../components/Actor/ActorCard";

import { popularActors } from "../../utils/ex";

export default function Actors() {
  return (
    <>
      <PopularActors />
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
          gap={4}
          align="center"
          justify="center"
          css={{ w: "100%" }}
        >
          {popularActors.map((actor) => (
            <ActorCard key={actor.id} {...actor} advanced />
          ))}
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
