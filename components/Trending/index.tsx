// components
import HorizontalList from "components/HorizontalList";
import MovieCard from "components/MovieCard";
// utils
import { formatDate } from "utils/formatDate";
import Badge from "./Badge";
//types
import { Result } from "services/movies/trending/types";

interface Props {
  movies: Result[];
}

export default function TrendingMovies({ movies }: Props = { movies: [] }) {
  return (
    <>
      <h1>Trending</h1>
      <HorizontalList>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rate={movie.vote_average}
            poster={movie.poster_path}
            date={formatDate(movie.release_date, { dateStyle: "medium" })}
            backdrop={movie.backdrop_path}
            badge={<Badge popularity={movie.vote_count} />}
          />
        ))}
      </HorizontalList>
    </>
  );
}
