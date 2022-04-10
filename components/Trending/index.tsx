import { Text } from "@nextui-org/react";
import useSWR from "swr";

// components
import HorizontalList from "components/HorizontalList";
import MovieCard from "components/MovieCard";
import TrendingLoader from "./loaders";
// utils
import { formatDate } from "utils/formatDate";
import Badge from "./Badge";
//types
import { MoviesTrendingResponse } from "services/movies/trending/types";

export const swrMovieTrendingKey = "movies/trending";

export default function TrendingMovies() {
  const { data, error } = useSWR<MoviesTrendingResponse>(swrMovieTrendingKey);
  const isLoading = !data && !error;
  const movies = data?.results;
  return (
    <>
      <Text h2 size={48} weight="bold">
        Trending
      </Text>
      <HorizontalList>
        {isLoading ? (
          <TrendingLoader />
        ) : (
          movies.map((movie) => (
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
          ))
        )}
      </HorizontalList>
    </>
  );
}
