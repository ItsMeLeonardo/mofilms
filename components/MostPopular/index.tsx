import { Text, CSS } from "@nextui-org/react";
import useSWR from "swr";
//components
import HorizontalList from "components/HorizontalList";
import MovieCard from "components/MovieCard";
//utils
import { formatDate } from "utils/formatDate";
//types
import { MoviePopularResponse } from "services/movies/popular/types";
//nextUI css
const badgeTitleCss: CSS = { lineHeight: "1.25rem" };

//swr key
export const swrMoviePopularKey = "movies/popular";

export default function MostPopular() {
  const { data } = useSWR<MoviePopularResponse>(swrMoviePopularKey);

  if (!data) {
    return <div>Loading...</div>;
  }

  const movies = data.results;

  return (
    <>
      <h1>Most popular</h1>
      <HorizontalList>
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rate={movie.vote_average}
            poster={movie.poster_path}
            date={formatDate(movie.release_date, { dateStyle: "medium" })}
            backdrop={movie.backdrop_path}
            cols={index === 0 ? 6 : 3}
            badge={
              <Text size="1.25rem" weight="bold" css={badgeTitleCss}>
                {(index + 1).toString().padStart(2, "0")}
              </Text>
            }
          />
        ))}
      </HorizontalList>
    </>
  );
}
