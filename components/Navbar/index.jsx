import LinkNext from "next/link";
import { Grid, Text } from "@nextui-org/react";

import NavbarSetting from "./NavbarSetting";
import NavbarLinks from "./NavbarLinks";
import Logo from "../Logo";

const navbarCss = {
  position: "sticky",
  top: "0",
  zIndex: "300",
  bg: "rgba(17, 17, 17, 0.85)",
  bgBlur: "0.5rem",
};

const responsiveLinksContainerCss = {
  "@smMax": {
    position: "absolute",
    top: "calc(100vh - ($18 + 1rem))",
    height: "$18",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "0 1rem",
  },
};

export default function Navbar() {
  return (
    <>
      <Grid.Container
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        css={navbarCss}
      >
        {/* Logo */}
        <Grid xs={1} sm={1} css={{ mr: "5rem" }} alignItems="center">
          <LinkNext href="/">
            <a>
              <Logo />
              <Text
                size={16}
                weight="bold"
                css={{
                  textGradient: "$gradBlue",
                }}
              >
                MoFilms
              </Text>
            </a>
          </LinkNext>
        </Grid>

        {/* Links */}
        <Grid
          className="navbar-links"
          xs={12}
          sm={7}
          gap={2}
          align="center"
          justify="flex-start"
          css={responsiveLinksContainerCss}
        >
          <NavbarLinks />
        </Grid>
        {/* Search and profile */}
        <Grid xs={11} sm={4}>
          <NavbarSetting />
        </Grid>
      </Grid.Container>

      <style jsx>{`
        a {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
