import { GetServerSideProps } from "next";
import { Spacer } from "@nextui-org/react";
import Head from "next/head";
import { SWRConfig } from "swr";

//components
import PopularActors from "components/Actor/PopularActors";
import ActorSearcher from "components/Actor/ActorSearcher";
//utils
import actorService from "services/actors";

//types
import { ActorPopularResponse } from "services/actors/popular/types";
//swrKey
import { swrActorPopularKey } from "components/Actor/PopularActors";
export interface Props {
  fallback: ActorPopularResponse;
}

export default function Actors({ fallback }: Props) {
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

      <SWRConfig value={{ fallback }}>
        <PopularActors />
      </SWRConfig>

      <Spacer />
      <ActorSearcher />
      <style jsx>{``}</style>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await actorService.popular();
  return {
    props: {
      fallback: {
        [swrActorPopularKey]: data,
      },
    },
  };
};
