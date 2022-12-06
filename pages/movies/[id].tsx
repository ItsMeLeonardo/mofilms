import { GetServerSideProps } from "next";
import Head from "next/head";
import { Grid } from "@nextui-org/react";

//components
import DetailPoster from "components/DetailPoster";
import MovieCast from "components/MovieDetail/MovieCast";
import MovieData from "components/MovieDetail/MovieData";
import MovieOptions from "components/MovieDetail/MovieOptions";

//utils
import movieService from "services/movies";

import ImageService from "services/images";
//types
import { MovieDetailResponse } from "services/movies/details/types";
import MovieRecommendations from "components/MovieRecommendations";

interface MovieDetailProps {
  movie: MovieDetailResponse;
}

export default function MovieDetails({ movie }: MovieDetailProps) {
  const poster = ImageService.poster.original(movie.poster_path);

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
      <MovieRecommendations movieId={movie.id.toString()} />
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
