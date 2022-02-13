import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Grid } from "@nextui-org/react";

import NavbarLinkItem from "./NavbarLinkItem";

const routes = ["/movies", "/tv", "/actors"];

export default function Navbar() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const path = router.asPath;
    setCurrentPath(path);
  }, [router.asPath]);

  return (
    <Grid.Container gap={2} justify="flex-start" alignItems="center">
      {routes.map((route) => (
        <NavbarLinkItem
          key={route}
          route={route}
          isInThisPage={route === currentPath}
        />
      ))}
    </Grid.Container>
  );
}
