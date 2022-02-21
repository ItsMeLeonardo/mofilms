import { Spacer, Row } from "@nextui-org/react";

import ListPoster from "../../components/ListPoster";

import movieService from "../../services/movies";

export default function Movies({ popular }) {
  return (
    <>
      <ListPoster movies={popular} />

      <Spacer x={2} />
      <Row as="h2" gap={1} css={{ "@smMax": { fontSize: "1.75rem" } }}>
        More movies
      </Row>
    </>
  );
}

export async function getServerSideProps() {
  const { results: popular } = await movieService.popular();
  return { props: { popular } };
}
