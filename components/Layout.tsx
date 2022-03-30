import { Container, CSS } from "@nextui-org/react";
import Navbar from "components/Navbar";

import { useInitializeWindowListener } from "hooks/useResponsive/useInitializeWindowListener";

const containerCss: CSS = {
  p: ".5rem .5rem $20 .5rem",
  background: "$gray900",
  minHeight: "100vh",
  "@sm": {
    pb: "0",
  },
};

export default function Layout({ children }) {
  useInitializeWindowListener();

  return (
    <Container md className="container" css={containerCss}>
      <Navbar />
      <main>{children}</main>
    </Container>
  );
}
