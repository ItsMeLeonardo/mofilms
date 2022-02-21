import { Text, Card, Grid } from "@nextui-org/react";

import HorizontalList from "../HorizontalList";
import { formatImageUrl } from "../../services/formatImageUrl";

export default function PosterSlot({ movies = [], onClick = () => {} } = {}) {
  return (
    <>
      <HorizontalList className="poster-movie-list">
        {movies.map((movie) => (
          <Grid key={movie.title}>
            <Card
              as="li"
              cover
              hoverable
              clickable
              onClick={() => onClick(movie)}
              css={{
                borderRadius: ".5rem",
                "& div": { borderRadius: ".5rem" },
                "&::after": {
                  content: "",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(180deg, transparent, #111)",
                },
              }}
            >
              <Card.Image
                src={formatImageUrl(movie.poster_path)}
                color="gradient"
                objectFit="cover"
                width="100%"
                height="10rem"
              />
              <Card.Footer css={{ position: "absolute", bottom: 0, zIndex: 2 }}>
                <Text
                  h6
                  css={{
                    textShadow: "0 0 1rem rgba(0,0,0,.5)",
                    maxW: "15ch",
                    overflow: "hidden",
                    whiteSpace: " nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {movie.title}
                </Text>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </HorizontalList>
    </>
  );
}
