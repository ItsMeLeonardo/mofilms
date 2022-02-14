import { memo } from "react";
import LinkNext from "next/link";
import { Button, Grid } from "@nextui-org/react";

const genderActiveGradient = "linear-gradient(90deg, #da4453 0%, #89216b 100%)";

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
            bg: isInThisRoute ? genderActiveGradient : "$accents1",
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
