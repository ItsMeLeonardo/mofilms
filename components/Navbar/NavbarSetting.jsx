import LinkNext from "next/link";

import { Grid, Row, Col, Link, Input, Avatar } from "@nextui-org/react";
import { Search, Notification } from "react-iconly";

const defaultAvatar =
  "https://i.pinimg.com/236x/29/68/3b/29683b54520b500a531ad18a4534c85e.jpg";

export default function Navbar() {
  return (
    <Grid.Container
      gap={1}
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <Grid>
        <Avatar
          squared
          icon={<Search size="small" />}
          css={{ cursor: "pointer" }}
        />
      </Grid>
      <Grid>
        <Avatar
          squared
          icon={<Notification size="small" />}
          css={{ cursor: "pointer" }}
        />
      </Grid>
      <Grid>
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
