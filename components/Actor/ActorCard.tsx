import { Tooltip, Text, Grid, Card } from "@nextui-org/react";
import ActorInfoCard from "./ActorInfoCard";

import imageService from "services/images";

export default function ActorCard({
  profile_path = "",
  name = "",
  advanced = false,
  known_for = [],
} = {}) {
  if (!profile_path) return <></>;

  const photo = imageService.profile.w185(profile_path);
  let movies = null;

  // if advanced is true, show the known_for movies(images) in tooltip
  if (advanced) {
    movies = known_for.slice(0, 3).map(({ id, title, poster_path }) => ({
      id,
      title,
      backdropImg: imageService.poster.w154(poster_path),
    }));
  }

  return (
    <Grid justify="center" align="center">
      <Tooltip
        content={<ActorInfoCard photo={photo} movies={movies} />}
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
