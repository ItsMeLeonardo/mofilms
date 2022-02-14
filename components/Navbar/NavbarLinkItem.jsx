import react from "react";
import LinkNext from "next/link";
import { Grid, Link, Text } from "@nextui-org/react";

const textGradient = "45deg, $red800 -20%, $purple400 50%";

function NavbarLinkItem({ route, isInThisPage, label }) {
  return (
    <Grid css={{ mr: "1.5rem" }}>
      <LinkNext href={route}>
        <Link>
          <Text
            size="1rem"
            weight="medium"
            color="$accents4"
            css={isInThisPage && { textGradient }}
          >
            {label}
          </Text>
        </Link>
      </LinkNext>
    </Grid>
  );
}

export default react.memo(NavbarLinkItem);
