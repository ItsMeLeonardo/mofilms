import Head from "next/head";
import ComingSoon from "components/helpers/ComingSoon";

export default function Tv() {
  return (
    <>
      <Head>
        <title>Tv media</title>
        <meta name="description" content="The most popular tv series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComingSoon />;
    </>
  );
}
