import { GetServerSideProps } from "next";
import { Spacer } from "@nextui-org/react";
import Head from "next/head";

//components
import PopularActors from "components/Actor/PopularActors";
import ActorSearcher from "components/Actor/ActorSearcher";
//utils
import actorService from "services/actors";

//types
import { GenericActor } from "services/actors/types";
export interface Props {
  popularActors?: GenericActor[];
}

export default function Actors({ popularActors = [] }: Props = {}) {
  return (
    <>
      <Head>
        <title>Actors</title>
        <meta
          name="description"
          content="The most popular actors of this week"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PopularActors actors={popularActors} />
      <Spacer />
      <ActorSearcher />
      <style jsx>{``}</style>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { results: popularActors } = await actorService.popular();
  return {
    props: {
      popularActors,
    },
  };
};
