import { useState, useEffect } from "react";

import { Text, Grid } from "@nextui-org/react";

import DetailPoster from "../../components/DetailPoster";
import MovieList from "../../components/MovieList";
import MovieCast from "../../components/MovieDetail/MovieCast";
import MovieData from "../../components/MovieDetail/MovieData";
import MovieOptions from "../../components/MovieDetail/MovieOptions";
import { formatImageUrl } from "../../services/formatImageUrl";

import movieService from "../../services/movies";

import { useNearScreen } from "../../hooks/useNearScreen";

export default function MovieDetails({ movie = null } = {}) {
  const [similarMovies, setSimilarMovies] = useState(null);

  const { elementRef: similarMoviesRef, isNearScreen } = useNearScreen();

  useEffect(() => {
    if (isNearScreen) {
      movieService.similar(movie.id).then((data) => {
        setSimilarMovies(data.results);
      });
    }
  }, [isNearScreen]);

  if (!movie) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <DetailPoster
        title={`${movie.title} (${new Date(movie.release_date).getFullYear()})`}
        overlayPosition="bottom"
        poster={formatImageUrl(movie.backdrop_path)}
      />
      <Grid.Container css={{ position: "relative", bottom: "10rem" }}>
        {/* options */}
        <MovieOptions poster_path={movie.poster_path} />
        {/* detail data */}
        <MovieData movie={movie} />
        {/* Cast */}
        <MovieCast id={movie.id} />
      </Grid.Container>
      {/* Similar movies */}
      <Text h3 weight="bold" size="2rem">
        Similar movies
      </Text>
      <span ref={similarMoviesRef}>
        {/* this is a flag to call the similar movies */}
      </span>
      {similarMovies && <MovieList movies={similarMovies} />}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const movie = await movieService.details(id);
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
