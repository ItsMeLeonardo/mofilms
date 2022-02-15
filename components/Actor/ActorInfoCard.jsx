import {
  Text,
  Avatar,
  Col,
  Row,
  Button,
  Spacer,
  Grid,
  Card,
} from "@nextui-org/react";
import { Send, Heart } from "react-iconly";

export default function ActorInfoCard({
  photo,
  birthday = "2000-12-18",
  popularity = "10",
  movies = null,
} = {}) {
  const age = new Date().getFullYear() - new Date(birthday).getFullYear();
  return (
    <>
      <Col css={{ w: "12rem" }}>
        <Row justify="space-between" css={{ w: "100%" }}>
          <Col align="center">
            <Text size={11}>Age</Text>
            <Text size={14} weight="bold">
              {age.toString()}
            </Text>
          </Col>
          <Spacer />
          <span>
            <Avatar
              size="xl"
              src={photo}
              css={{ position: "relative", bottom: "1.5rem" }}
              bordered
              color="gradient"
            />
          </span>
          <Spacer />
          <Col align="center">
            <Text size={11}>Popularity</Text>
            <Text size={14} weight="bold">
              {Math.round(popularity).toString()}
            </Text>
          </Col>
        </Row>
        {movies && (
          <>
            <Grid.Container gap={0.5}>
              {movies.map(({ id, backdropImg, title }, index) => (
                <Grid key={id} xs={index == 0 ? 12 : 6}>
                  <Card.Image
                    width="100%"
                    height={80}
                    objectFit="cover"
                    src={backdropImg}
                    alt={title}
                  />
                </Grid>
              ))}
            </Grid.Container>
            <Spacer y={0.5} />
          </>
        )}
        <Row justify="space-between">
          <Button
            auto
            rounded
            color="primary"
            light
            icon={<Send />}
            css={{ aspectRatio: "1" }}
          />
          <Button shadow auto>
            <Text size={14}>Movies</Text>
          </Button>
          <Button
            auto
            rounded
            color="primary"
            light
            icon={<Heart />}
            css={{ aspectRatio: "1" }}
          />
        </Row>
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
