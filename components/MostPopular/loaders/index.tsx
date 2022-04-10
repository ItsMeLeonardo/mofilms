import { BackdropLoader, PosterLoader } from "components/MovieCard/loaders";

export default function MostPopularLoader() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) =>
        index === 0 ? <BackdropLoader /> : <PosterLoader />
      )}
    </>
  );
}
