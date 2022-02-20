import { Grid } from "@nextui-org/react";
export default function HorizontalList({ children, gap = 2 } = {}) {
  return (
    <>
      <div className="container">
        <section className="scroll-content">
          <Grid.Container
            gap={gap}
            wrap="nowrap"
            css={{ width: "max-content" }}
          >
            {children}
          </Grid.Container>
        </section>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          position: relative;
          z-index: 10;
        }
        .container::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          z-index: 100;
          width: 2.5rem;
          height: 100%;
          background: linear-gradient(90deg, transparent, #111);
        }
        .scroll-content {
          width: 100%;
          overflow: auto hidden;
        }
        @media (min-width: 600px) {
          .container::after {
            width: 5rem;
          }
        }
      `}</style>
    </>
  );
}
