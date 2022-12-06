import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Text } from "@nextui-org/react";

import { useNearScreen } from "hooks/useNearScreen";
import movieService from "services/movies";

import MovieListLoader from "components/MovieList/loaders";
const MovieList = dynamic(() => import("components/MovieList"));

import type { Result as Recommendation } from "services/movies/similar/types";

type Props = {
  movieId: string;
};

export default function MovieRecommendations({ movieId }: Props) {
  const [recommendationMovies, setSimilarMovies] =
    useState<Recommendation[]>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { elementRef: recommendationsMoviesRef, isNearScreen } =
    useNearScreen();

  useEffect(() => {
    if (isNearScreen) {
      setLoading(true);
      setError(false);
      movieService
        .similar(movieId)
        .then((data) => {
          setSimilarMovies(data.results);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isNearScreen, movieId]);

  return (
    <>
      <span ref={recommendationsMoviesRef}>
        {/* this is a flag to call the recommendations movies */}
      </span>

      {recommendationMovies && !error && recommendationMovies.length > 0 && (
        <>
          <Text h3 weight="bold" size="2rem">
            Recommendations {`(${recommendationMovies.length})`}
          </Text>
          <MovieList movies={recommendationMovies} />
        </>
      )}
      {loading && !error && <MovieListLoader />}
    </>
  );
}
