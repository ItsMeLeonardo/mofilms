import { Grid } from "@nextui-org/react";
import { PosterLoader } from "components/MovieCard/loaders";

export default function MovieListLoader() {
  return (
    <Grid.Container gap={2}>
      {Array.from({ length: 8 }).map((_, index) => (
        <Grid xs={12} sm={3} key={index}>
          <PosterLoader />
        </Grid>
      ))}
    </Grid.Container>
  );
}
