import {
  Text,
  Avatar,
  Col,
  Row,
  Button,
  Spacer,
  Grid,
  Card,
  CSS,
} from "@nextui-org/react";
import { Send, Heart } from "react-iconly";

//utils
import ImageService from "services/images";
//types
import { ActorInfoCardProps } from "components/Actor/types";
//nextUI css
const columnCss: CSS = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

/**
 * @description: this is the tooltip of the card, if there are `movies` show the movies in the tooltip, otherwise * show the basic information
 */
export default function ActorInfoCard({ actor, movies }: ActorInfoCardProps) {
  const { profile_path, popularity } = actor;

  const photo = ImageService.profile.w185(profile_path);

  const age = new Date().getFullYear() - new Date("03-25-2003").getFullYear();
  return (
    <>
      <Col css={{ w: "12rem" }}>
        <Row justify="space-between" css={{ w: "100%" }}>
          <Col css={columnCss}>
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
          <Col css={columnCss}>
            <Text size={11}>Popularity</Text>
            <Text size={14} weight="bold">
              {Math.round(popularity).toString()}
            </Text>
          </Col>
        </Row>
        {movies && (
          <>
            <Grid.Container gap={0.5}>
              {movies.map(({ id, backdrop_path, title }, index) => (
                <Grid key={id} xs={index == 0 ? 12 : 6}>
                  <Card.Image
                    width="100%"
                    height={80}
                    objectFit="cover"
                    src={ImageService.backdrop.w300(backdrop_path)}
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
