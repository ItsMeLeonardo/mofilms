import { Grid, Avatar } from "@nextui-org/react";
import { Notification } from "react-iconly";

import SearchInput from "../SearchInput";

const defaultAvatar =
  "https://i.pinimg.com/236x/29/68/3b/29683b54520b500a531ad18a4534c85e.jpg";

export default function NavbarSetting() {
  return (
    <Grid.Container
      gap={0.5}
      wrap="nowrap"
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <Grid alignItems="center" justify="center">
        <SearchInput />
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
        <Avatar
          size="lg"
          src={defaultAvatar}
          color="gradient"
          bordered
          css={{ cursor: "pointer" }}
        />
      </Grid>
    </Grid.Container>
  );
}
