import { GetServerSideProps } from "next";
import Head from "next/head";
// components
import ListPoster from "components/ListPoster";
//utils
import movieService from "services/movies";
//types
import { Result as PopularResult } from "services/movies/popular/types";

interface Props {
  popular: PopularResult[];
}

export default function Movies({ popular }: Props) {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="The most popular movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListPoster movies={popular} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { results: popular } = await movieService.popular();
  return { props: { popular } };
};
