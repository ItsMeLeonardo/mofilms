import { Tooltip, Text, Grid, Card } from "@nextui-org/react";
//components
import ActorInfoCard from "./ActorInfoCard";
//utils
import imageService from "services/images";
//types
import { KnownFor } from "services/actors/types/knowFor";
import { ActorCardProps } from "./types";

export default function ActorCard({ actor, advancedData }: ActorCardProps) {
  const { profile_path, known_for, name } = actor;
  if (!profile_path) return <></>;

  const photo = imageService.profile.w185(profile_path);
  let movies: KnownFor[] = null;

  // if advanced is true, show the known_for movies(images) in tooltip
  if (advancedData) {
    movies = known_for.slice(0, 3);
  }

  return (
    <Grid justify="center">
      <Tooltip
        content={<ActorInfoCard actor={actor} movies={movies} />}
        css={{ bgBlur: ".5rem", bg: "rgba(51,51,51,.65)" }}
      >
        <Card
          hoverable
          as="figure"
          cover
          css={{
            borderRadius: 0,
            "& div": { borderRadius: ".25rem !important" }, // override the borderRadius of the Card
            "&::after": {
              content: "",
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "linear-gradient(180deg, transparent, #111)",
            },
            "&:hover figcaption": {
              bottom: 0,
            },
          }}
        >
          <Card.Image
            objectFit="cover"
            width="100%"
            height="250px"
            src={photo}
            alt={name}
          />
          <Card.Footer
            as="figcaption"
            css={{
              position: "absolute",
              zIndex: "2",
              bottom: -50,
              transition: "bottom .3s ease-in-out",
              borderRadius: 0,
            }}
          >
            <Text h5>{name}</Text>
          </Card.Footer>
        </Card>
      </Tooltip>
    </Grid>
  );
}
