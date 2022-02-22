import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { Home } from "react-iconly";

export default function Custom404(props) {
  return (
    <>
      <section>
        <h1>404 Page Not Found</h1>
        <NextLink href="/">
          <Link>
            <Home />
            Go to home :D
          </Link>
        </NextLink>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: auto 0;
        }
      `}</style>
    </>
  );
}
