import { Grid } from "@nextui-org/react";
//components
import HorizontalList from "components/HorizontalList";
import PosterSlotItem from "./PosterSlotItem";
//types
import { PosterSlotProps } from "./types";

export default function PosterSlot({
  movies,
  movieSelected,
  onClick,
}: PosterSlotProps) {
  return (
    <>
      <HorizontalList>
        {movies.map((movie) => (
          <Grid key={movie.title} onClick={() => onClick(movie)}>
            <PosterSlotItem
              movie={movie}
              isSelected={movieSelected.id === movie.id}
            />
          </Grid>
        ))}
      </HorizontalList>
    </>
  );
}
