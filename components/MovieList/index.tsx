import { Grid } from "@nextui-org/react";

//components
import MovieCard from "components/MovieCard";
//utils
import { formatDate } from "utils/formatDate";
//types
import { Props } from "./types";

export default function MovieList({ movies }: Props = { movies: [] }) {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          backdrop={movie.backdrop_path}
          date={formatDate(movie.date || movie.release_date, {
            dateStyle: "medium",
          })}
          rate={movie.vote_average}
          poster={movie.poster_path}
          className="movieList-item"
        />
      ))}
    </Grid.Container>
  );
}
