import { Button, Row } from "@nextui-org/react";
import { Setting, User, Logout } from "react-iconly";

export default function ProfileOptions() {
  return (
    <Row css={{ flexDirection: "column", gap: "0.5rem" }}>
      <Button icon={<Setting />} size="sm" light css={{ w: "100%" }}>
        Settings
      </Button>
      <Button icon={<User />} size="sm" light css={{ w: "100%" }}>
        Profile
      </Button>
      <Button icon={<Logout />} size="sm" light css={{ w: "100%" }}>
        Logout
      </Button>
    </Row>
  );
}
