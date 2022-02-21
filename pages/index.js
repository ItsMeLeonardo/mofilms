import Head from "next/head";
import { Spacer } from "@nextui-org/react";

import MostPopular from "../components/MostPopular";
import Trending from "../components/Trending";

import movieService from "../services/movies";

export default function Home({ topMovies, trending }) {
  return (
    <>
      <div>
        <Head>
          <title>MoFilms 📽</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MostPopular movies={topMovies} />

        <Spacer />
        <Trending movies={trending} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { results: topMovies } = await movieService.topMovies();
  const { results: trending } = await movieService.trending();

  return {
    props: {
      topMovies,
      trending,
    },
  };
}
