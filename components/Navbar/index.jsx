import LinkNext from "next/link";

import { Grid } from "@nextui-org/react";
import NavbarSetting from "./NavbarSetting";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <Grid.Container justify="space-between" alignItems="center">
      <Grid xs={4} sm={1}>
        <LinkNext href="/">
          <a>
            <div>LOGO</div>
          </a>
        </LinkNext>
      </Grid>
      <Grid xs={0} sm={7} gap={2} align="center" justify="flex-start">
        <NavbarLinks />
      </Grid>
      <Grid xs={8} sm={4}>
        <NavbarSetting />
      </Grid>
    </Grid.Container>
  );
}
