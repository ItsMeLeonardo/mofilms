import { memo } from "react";
import LinkNext from "next/link";
import { Iconly } from "react-iconly";
import { Grid, Link, Text, CSS } from "@nextui-org/react";
//types
import { NavbarLinkItemProps } from "./types";
//nextUI css
const linkItemCss: CSS = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: ".25rem",
  "@md": {
    gap: ".5rem",
    flexDirection: "row",
  },
};

const linkTextCss: CSS = {
  fontWeight: "bold",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "@sm": {
    fontSize: ".9rem",
    maxW: "max-content",
    fontWeight: "normal",
  },
  "@md": { fontSize: "1rem" },
};

function NavbarLinkItem({
  route,
  isInThisPage,
  label,
  iconLabel,
}: NavbarLinkItemProps) {
  return (
    <>
      <Grid css={{ "@xs": { mr: "1.5rem" } }}>
        <LinkNext href={route}>
          <Link css={linkItemCss}>
            <Iconly
              name={iconLabel}
              size="small"
              stroke="bold"
              filled={isInThisPage}
              primaryColor={isInThisPage ? "#A258DF" : "#666"}
            />
            <Text
              size=".75rem"
              weight="medium"
              color="$accents4"
              css={{
                ...(isInThisPage && { textGradient: "$gradPurple" }),
                ...linkTextCss,
              }}
            >
              {label}
            </Text>
          </Link>
        </LinkNext>
      </Grid>
    </>
  );
}

export default memo(NavbarLinkItem);
