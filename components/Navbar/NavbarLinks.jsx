import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Grid } from "@nextui-org/react";

import NavbarLinkItem from "./NavbarLinkItem";

const routes = [
  { route: "/movies/action", label: "Movies" },
  { route: "/tv", label: "Tv" },
  { route: "/actors", label: "Actors" },
  { route: "/advancedSearch", label: "Advanced Search" },
];

export default function Navbar() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const path = router.asPath;
    setCurrentPath(path);
  }, [router.asPath]);

  return (
    <Grid.Container gap={2} justify="flex-start" alignItems="center">
      {routes.map(({ label, route }) => {
        const isInThisPage = route.split("/")[1] === currentPath.split("/")[1];
        return (
          <NavbarLinkItem
            key={route}
            route={route}
            label={label}
            isInThisPage={isInThisPage}
          />
        );
      })}
    </Grid.Container>
  );
}
