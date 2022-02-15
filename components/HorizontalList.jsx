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
        .scroll-content {
          overflow: auto hidden;
        }
        .container {
          position: relative;
        }
        .container::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          z-index: 10;
          width: 5rem;
          height: 100%;
          background: linear-gradient(90deg, transparent, #111);
        }
      `}</style>
    </>
  );
}
