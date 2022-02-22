import { Grid } from "@nextui-org/react";

import HorizontalList from "../HorizontalList";
import PosterSlotItem from "./PosterSlotItem";

export default function PosterSlot({
  movies = [],
  movieSelected,
  onClick = () => {},
} = {}) {
  return (
    <>
      <HorizontalList className="poster-movie-list">
        {movies.map((movie) => (
          <Grid key={movie.title} onClick={() => onClick(movie)}>
            <PosterSlotItem
              movie={movie}
              isSelected={movieSelected?.id === movie.id}
            />
          </Grid>
        ))}
      </HorizontalList>
    </>
  );
}
