import { Grid } from "@nextui-org/react";

import MovieCard from "./MovieCard";
import { formatDate } from "../utils/formatDate";

export default function MovieList({ movies = [] } = []) {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          date={formatDate(movie.date, { dateStyle: "medium" })}
          rate={movie.vote_average}
          poster={movie.poster_path}
          h={350}
          className="movieList-item"
        />
      ))}
    </Grid.Container>
  );
}
