import { memo } from "react";
import LinkNext from "next/link";
import { Button, Grid, CSS } from "@nextui-org/react";

//types
interface Props {
  route: string;
  isInThisRoute: boolean;
  label: string;
}
//nextUI css
const genderActiveCss = (isActive: boolean): CSS => ({
  bg: "$accents1",
  linearGradient: isActive && "$gradRed",
});

function GenderAnchor({ route, isInThisRoute, label }: Props) {
  return (
    <Grid>
      <LinkNext href={route}>
        <Button
          as="a"
          auto
          shadow={isInThisRoute}
          color="error"
          css={genderActiveCss(isInThisRoute)}
          clickable={!isInThisRoute}
        >
          {label}
        </Button>
      </LinkNext>
    </Grid>
  );
}

export default memo(GenderAnchor);
