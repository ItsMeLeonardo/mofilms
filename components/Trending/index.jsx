import { Text } from "@nextui-org/react";
import { TwoUsers } from "react-iconly";

import HorizontalList from "../HorizontalList";
import MovieCard from "../MovieCard";

import { formatDate } from "../../utils/formatDate";

const Badge = ({ popularity }) => (
  <>
    <TwoUsers stroke="bold" size="small" />
    <Text size={12} weight="bold">
      {popularity}
    </Text>
  </>
);

export default function MostPopular({ movies = [] } = {}) {
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
            backdropImg={movie.backdrop_path}
            badge={<Badge popularity={movie.vote_count} />}
          />
        ))}
      </HorizontalList>
    </>
  );
}
