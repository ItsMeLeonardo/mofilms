import { PosterLoader } from "components/MovieCard/loaders";

export default function TrendingLoader() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <PosterLoader key={index} />
      ))}
    </>
  );
}
