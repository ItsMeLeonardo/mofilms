import { Grid } from "@nextui-org/react";

export default function HorizontalList({ children }) {
  return (
    <>
      <section>
        <Grid.Container gap={2} wrap="nowrap" css={{ width: "max-content" }}>
          {children}
        </Grid.Container>
      </section>

      <style jsx>{`
        section {
          overflow: auto hidden;
        }
      `}</style>
    </>
  );
}
