import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Text, Grid } from "@nextui-org/react";
//components
import DetailPoster from "components/DetailPoster";
import MovieCast from "components/MovieDetail/MovieCast";
import MovieData from "components/MovieDetail/MovieData";
import MovieOptions from "components/MovieDetail/MovieOptions";
import MovieListLoader from "components/MovieList/loaders";
const MovieList = dynamic(() => import("components/MovieList"));
//utils
import movieService from "services/movies";

import { useNearScreen } from "hooks/useNearScreen";
import { useResponsiveImage } from "hooks/useResponsiveImage";
//types
import { MovieDetailResponse } from "services/movies/details/types";
import { Result as SimilarResult } from "services/movies/similar/types";

interface MovieDetailProps {
  movie: MovieDetailResponse;
}

export default function MovieDetails({ movie }: MovieDetailProps) {
  const [similarMovies, setSimilarMovies] = useState<SimilarResult[]>(null);

  const { elementRef: similarMoviesRef, isNearScreen } = useNearScreen();
  const { imageUrl: poster } = useResponsiveImage(
    movie.backdrop_path,
    "backdrop"
  );

  useEffect(() => {
    if (isNearScreen) {
      movieService.similar(movie.id.toString()).then((data) => {
        setSimilarMovies(data.results);
      });
    }
  }, [isNearScreen, movie.id]);

  if (!movie) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content={movie?.overview} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DetailPoster
        title={`${movie.title} (${new Date(movie.release_date).getFullYear()})`}
        overlayPosition="bottom"
        poster={poster}
      />

      <Grid.Container css={{ position: "relative", bottom: "10rem" }}>
        {/* options */}
        <MovieOptions poster={movie.poster_path} />
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

      {similarMovies ? (
        <MovieList movies={similarMovies} />
      ) : (
        <MovieListLoader />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  try {
    const movie = await movieService.details(id as string);
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
};
