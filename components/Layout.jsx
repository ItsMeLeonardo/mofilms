import { Container } from "@nextui-org/react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Container
      md
      className="container"
      css={{ p: ".5rem", background: "$gray900", minHeight: "100vh" }}
    >
      <Navbar />
      <main>{children}</main>
    </Container>
  );
}
