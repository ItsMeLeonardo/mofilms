import ListPoster from "../../components/ListPoster";

import movieService from "../../services/movies";

export default function Movies({ popular }) {
  return (
    <>
      <ListPoster movies={popular} />
    </>
  );
}

export async function getServerSideProps() {
  const { results: popular } = await movieService.popular();
  return { props: { popular } };
}
