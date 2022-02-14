import { Grid } from "@nextui-org/react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies = [] } = []) {
  return (
    <Grid.Container gap={2}>
      {movies.map((movie, index) => (
        <MovieCard
          {...movie}
          key={`${movie.title}-${index}-${Date.now()}`}
          h={350}
        />
      ))}
    </Grid.Container>
  );
}
