import { Grid, Avatar, Tooltip } from "@nextui-org/react";
import { Notification } from "react-iconly";

import SearchInput from "../SearchInput";
import ProfileOptions from "../Profile/ProfileOptions";

const defaultAvatar =
  "https://i.pinimg.com/236x/29/68/3b/29683b54520b500a531ad18a4534c85e.jpg";

const tooltipCss = { bgBlur: ".5rem", bg: "rgba(51,51,51,.65)" };

export default function NavbarSetting() {
  return (
    <Grid.Container
      gap={0.5}
      wrap="nowrap"
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      {/* SEARCHER */}
      <Grid xs={0} sm={8} alignItems="center" justify="flex-end">
        <SearchInput label="What do we see today?" />
      </Grid>
      {/* NOTIFICATION */}
      <Grid xs={0} sm={2} alignItems="center" justify="center">
        <Avatar
          squared
          icon={<Notification size="small" stroke="bold" primaryColor="#fff" />}
          css={{ cursor: "pointer" }}
        />
      </Grid>
      {/* AVATAR */}
      <Grid alignItems="center" justify="center">
        {/* <ProfileOptions /> */}
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
      </Grid>
    </Grid.Container>
  );
}
