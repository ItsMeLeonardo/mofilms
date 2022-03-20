import Head from "next/head";

import ListPoster from "../../components/ListPoster";
import movieService from "../../services/movies";

export default function Movies({ popular }) {
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

export async function getServerSideProps() {
  const { results: popular } = await movieService.popular();
  return { props: { popular } };
}
