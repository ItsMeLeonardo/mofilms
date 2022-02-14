import { memo } from "react";
import LinkNext from "next/link";
import { Button, Grid } from "@nextui-org/react";

function GenderAnchor({ route, isInThisRoute, label }) {
  return (
    <Grid>
      <LinkNext href={route}>
        <Button
          as="a"
          auto
          shadow={isInThisRoute}
          color="error"
          css={{
            bg: "$accents1",
            linearGradient: isInThisRoute && "$gradRed",
          }}
          clickable={!isInThisRoute}
        >
          {label}
        </Button>
      </LinkNext>
    </Grid>
  );
}

export default memo(GenderAnchor);
