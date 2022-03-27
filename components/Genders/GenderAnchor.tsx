import { memo } from "react";
import LinkNext from "next/link";
import { Button, Grid } from "@nextui-org/react";

//types
interface Props {
  route: string;
  isInThisRoute: boolean;
  label: string;
}

function GenderAnchor({ route, isInThisRoute, label }: Props) {
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
