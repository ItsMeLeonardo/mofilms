import react from "react";
import LinkNext from "next/link";
import { Grid, Link, Text } from "@nextui-org/react";

const textGradient = "45deg, $red800 -20%, $purple400 50%";

const fromPathToText = (path = "") => {
  const result = path.slice(1, path.length);
  return result.charAt(0).toUpperCase() + result.slice(1);
};

function NavbarLinkItem({ route, isInThisPage }) {
  const onlyText = fromPathToText(route);
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
            {onlyText}
          </Text>
        </Link>
      </LinkNext>
    </Grid>
  );
}

export default react.memo(NavbarLinkItem, (prevProps, nextProps) => {
  return prevProps.isInThisPage === nextProps.isInThisPage;
});
