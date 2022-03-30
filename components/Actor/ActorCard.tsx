import { Tooltip, Text, Grid, Card, CSS } from "@nextui-org/react";
//components
import ActorInfoCard from "./ActorInfoCard";
//utils
import { useResponsiveImage } from "hooks/useResponsiveImage";
//types
import { KnownFor } from "services/actors/types/knowFor";
import { ActorCardProps } from "./types";

// nextUI css
const cardBodyCss: CSS = {
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
};

const cardFooterCss: CSS = {
  position: "absolute",
  zIndex: "2",
  bottom: -50,
  transition: "bottom .3s ease-in-out",
  borderRadius: 0,
};

const cardTooltipCss: CSS = { bgBlur: ".5rem", bg: "rgba(51,51,51,.65)" };

export default function ActorCard({ actor, advancedData }: ActorCardProps) {
  const { profile_path, known_for, name } = actor;

  const { imageUrl: photo } = useResponsiveImage(profile_path, "profile");

  if (!profile_path) return <></>;

  let movies: KnownFor[] = null;

  // if advanced is true, show the known_for movies(images) in tooltip
  if (advancedData) {
    movies = known_for.slice(0, 3);
  }

  return (
    <Grid justify="center">
      <Tooltip
        content={<ActorInfoCard actor={actor} movies={movies} />}
        css={cardTooltipCss}
      >
        <Card hoverable as="figure" cover css={cardBodyCss}>
          <Card.Image
            objectFit="cover"
            width="100%"
            height="250px"
            src={photo}
            alt={name}
          />
          <Card.Footer as="figcaption" css={cardFooterCss}>
            <Text h5>{name}</Text>
          </Card.Footer>
        </Card>
      </Tooltip>
    </Grid>
  );
}
