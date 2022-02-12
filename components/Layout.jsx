import { Container } from "@nextui-org/react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Container md className="container" css={{ p: ".5rem" }}>
      <Navbar />
      <main>{children}</main>
    </Container>
  );
}
