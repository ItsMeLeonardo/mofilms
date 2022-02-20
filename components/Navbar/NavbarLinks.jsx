import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Grid } from "@nextui-org/react";

import NavbarLinkItem from "./NavbarLinkItem";

const routes = [
  { route: "/movies/28", label: "Movies", iconLabel: "Video" },
  { route: "/tv/16", label: "Tv", iconLabel: "Image" },
  { route: "/actors", label: "Actors", iconLabel: "Star" },
  // { route: "/advancedSearch", label: "Advanced Search", iconLabel: "Search" },
];

const containerLinkCss = {
  "@smMax": {
    bg: "$accents1",
    h: "100%",
    maxW: "420px",
    borderRadius: "1rem",
    justifyContent: "space-between",
  },
};

export default function Navbar() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const path = router.asPath;
    setCurrentPath(path);
  }, [router.asPath]);

  return (
    <Grid.Container
      gap={2}
      justify="flex-start"
      alignItems="center"
      wrap="nowrap"
      css={containerLinkCss}
    >
      {routes.map(({ label, route, iconLabel }) => {
        const isInThisPage = route.split("/")[1] === currentPath.split("/")[1];
        return (
          <NavbarLinkItem
            key={route}
            route={route}
            label={label}
            isInThisPage={isInThisPage}
            iconLabel={iconLabel}
          />
        );
      })}
    </Grid.Container>
  );
}
