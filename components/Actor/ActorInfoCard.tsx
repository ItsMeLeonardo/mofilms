import { useEffect, useState } from "react";
import {
  Text,
  Avatar,
  Col,
  Row,
  Button,
  Spacer,
  Grid,
  CSS,
} from "@nextui-org/react";
import { Send, Heart } from "react-iconly";

//components
import KnownForCard from "./KnowForCard";
import ImageService from "services/images";

//utils
import actorService from "services/actors";

//types
import { ActorInfoCardProps } from "./types";
//nextUI css
const columnCss: CSS = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function ActorInfoCard({ actor, movies }: ActorInfoCardProps) {
  const [age, setAge] = useState("");
  const { profile_path, popularity, id } = actor;

  useEffect(() => {
    actorService.details(id.toString()).then(({ birthday }) => {
      const age = new Date().getFullYear() - new Date(birthday).getFullYear();
      setAge(age.toString());
    });
  }, []);

  const photo = ImageService.profile.w185(profile_path);

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
          <Grid.Container gap={0.5} css={{ mb: "1rem" }}>
            {movies.map((knownFor, i) => (
              <KnownForCard key={knownFor.id} knownFor={knownFor} index={i} />
            ))}
          </Grid.Container>
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
