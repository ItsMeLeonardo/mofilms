import LinkNext from "next/link";
import { Grid, Text } from "@nextui-org/react";

import NavbarSetting from "./NavbarSetting";
import NavbarLinks from "./NavbarLinks";
import Logo from "../Logo";

const textGradient = "112deg, #AAFFEC -63.59%, #ff4ecd -20.3%, #0070F3 70.46%";

export default function Navbar() {
  return (
    <>
      <Grid.Container justify="space-between" alignItems="center" wrap="nowrap">
        <Grid xs={1} sm={1} css={{ mr: "5rem" }}>
          <LinkNext href="/">
            <a>
              <Logo />
              <Text size={16} weight="bold" css={{ textGradient }}>
                MoFilms
              </Text>
            </a>
          </LinkNext>
        </Grid>
        <Grid xs={0} sm={7} gap={2} align="center" justify="flex-start">
          <NavbarLinks />
        </Grid>
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
