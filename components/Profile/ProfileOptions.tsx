import { Button, Row, CSS } from "@nextui-org/react";
import { Setting, User, Logout } from "react-iconly";

//nextUI css
const buttonCss: CSS = { w: "100%" };
const rowCss: CSS = { flexDirection: "column", gap: "0.5rem" };

export default function ProfileOptions() {
  return (
    <Row css={rowCss}>
      <Button icon={<Setting />} size="sm" light css={buttonCss}>
        Settings
      </Button>
      <Button icon={<User />} size="sm" light css={buttonCss}>
        Profile
      </Button>
      <Button icon={<Logout />} size="sm" light css={buttonCss}>
        Logout
      </Button>
    </Row>
  );
}
