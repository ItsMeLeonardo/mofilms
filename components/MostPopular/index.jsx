import { Text } from "@nextui-org/react";

import HorizontalList from "../HorizontalList";
import MovieCard from "../MovieCard";

import { formatImageUrl } from "../../services/formatImageUrl";
import { formatDate } from "../../utils/formatDate";

export default function MostPopular({ movies = [] } = {}) {
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
            poster={formatImageUrl(movie.poster_path)}
            date={formatDate(movie.release_date, { dateStyle: "medium" })}
            backdropImg={formatImageUrl(movie.backdrop_path)}
            cols={index === 0 ? 6 : 3}
            badge={
              <Text
                size="1.25rem"
                weight="bold"
                css={{ lineHeight: "1.25rem" }}
              >
                {(index + 1).toString().padStart(2, "0")}
              </Text>
            }
          />
        ))}
      </HorizontalList>
    </>
  );
}
