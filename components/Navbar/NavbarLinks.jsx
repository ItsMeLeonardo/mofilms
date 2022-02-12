import LinkNext from "next/link";

import { Grid, Link } from "@nextui-org/react";

export default function Navbar() {
  return (
    <Grid.Container gap={2} justify="flex-start" alignItems="center">
      <Grid>
        <LinkNext href="/movies">
          <Link>Movies</Link>
        </LinkNext>
      </Grid>
      <Grid>
        <LinkNext href="/tv">
          <Link>TV shows</Link>
        </LinkNext>
      </Grid>
      <Grid>
        <LinkNext href="/actors">
          <Link>Actors</Link>
        </LinkNext>
      </Grid>
    </Grid.Container>
  );
}
