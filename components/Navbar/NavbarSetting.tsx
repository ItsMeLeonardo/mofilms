import NextLink from "next/link";
import { Grid, Avatar, Tooltip, Button, Spacer, CSS } from "@nextui-org/react";
import { Notification } from "react-iconly";
//components
import SearchInput from "components/SearchInput";
import ProfileOptions from "components/Profile/ProfileOptions";

const defaultAvatar =
  "https://i.pinimg.com/236x/29/68/3b/29683b54520b500a531ad18a4534c85e.jpg";

const tooltipCss: CSS = { bgBlur: ".5rem", bg: "rgba(51,51,51,.65)" };

export default function NavbarSetting() {
  return (
    <Grid.Container
      gap={0.5}
      wrap="nowrap"
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      {/* Login and sign up */}
      <Grid alignItems="center" justify="center">
        <NextLink href="/login">
          <Button as="a" auto light>
            Login
          </Button>
        </NextLink>
      </Grid>
      <Grid alignItems="center" justify="center">
        <a
          href="https://www.themoviedb.org/signup"
          target="_blank"
          rel="noreferrer"
        >
          <Button as="a" auto shadow color="gradient">
            Register
          </Button>
        </a>
      </Grid>
      {/* SEARCHER */}
      {/*     <Grid sm={8} alignItems="center" justify="flex-end">
        <SearchInput label="What do we see today?" />
      </Grid> */}
      {/* NOTIFICATION */}
      {/*      <Grid sm={2} alignItems="center" justify="center">
        <Avatar
          squared
          icon={<Notification size="small" stroke="bold" primaryColor="#fff" />}
          css={{ cursor: "pointer" }}
        />
      </Grid> */}

      {/* AVATAR */}
      {/*      <Grid alignItems="center" justify="center">
        <Tooltip
          content={<ProfileOptions />}
          placement="bottomEnd"
          css={tooltipCss}
          hideArrow
        >
          <Avatar
            size="lg"
            src={defaultAvatar}
            color="gradient"
            bordered
            css={{ cursor: "pointer" }}
          />
        </Tooltip>
      </Grid> */}
    </Grid.Container>
  );
}
