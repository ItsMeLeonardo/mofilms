import { Text, CSS } from "@nextui-org/react";
import useSWR from "swr";
//components
import HorizontalList from "components/HorizontalList";
import MovieCard from "components/MovieCard";
import MostPopularLoader from "./loaders";
//utils
import { formatDate } from "utils/formatDate";
//types
import { MoviePopularResponse } from "services/movies/popular/types";
//nextUI css
const badgeTitleCss: CSS = { lineHeight: "1.25rem" };

//swr key
export const swrMoviePopularKey = "movies/topMovies";

export default function MostPopular() {
  const { data, error } = useSWR<MoviePopularResponse>(swrMoviePopularKey);
  const isLoading = !data && !error;
  const movies = data?.results;

  return (
    <>
      <Text h2 size={48} weight="bold">
        Most popular
      </Text>
      <HorizontalList>
        {isLoading ? (
          <MostPopularLoader />
        ) : (
          movies?.map((movie, index) => (
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
          ))
        )}
      </HorizontalList>
    </>
  );
}
