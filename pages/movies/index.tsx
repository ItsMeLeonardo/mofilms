import { GetServerSideProps } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";
// components
import ListPoster from "components/ListPoster";
//utils
import movieService from "services/movies";

//swrKey
import { swrMoviePopularKey } from "components/ListPoster";

//types
import { MoviePopularResponse } from "services/movies/popular/types";

interface Props {
  fallback: {
    [swrMoviePopularKey]: MoviePopularResponse;
  };
}

export default function Movies({ fallback }: Props) {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="The most popular movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fallback }}>
        <ListPoster />
      </SWRConfig>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await movieService.popular();
  return {
    props: {
      fallback: {
        [swrMoviePopularKey]: movies,
      },
    },
  };
};
