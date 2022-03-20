import { Grid, Row, Card, Button } from "@nextui-org/react";
import { Heart2, Plus, Play } from "react-iconly";

import { imageUrl } from "../../services/images";

export default function MovieOptions({ poster_path }) {
  return (
    <>
      <Grid xs={12} sm={2} md={2} justify="center">
        <Row
          align="center"
          css={{ flexDirection: "column", gap: "1rem", maxW: "320px" }}
        >
          <Card.Image
            src={imageUrl.poster_sizes.w185(poster_path)}
            width="100%"
            height="180px"
          />
          <Button flat icon={<Plus />} css={{ minWidth: "90% !important" }}>
            Add to list
          </Button>
          <Button
            flat
            color="secondary"
            icon={<Heart2 />}
            css={{ minWidth: "90% !important" }}
          >
            Watch later
          </Button>
          <Button
            flat
            color="success"
            icon={<Play />}
            css={{ minWidth: "90% !important" }}
          >
            Trailer
          </Button>
        </Row>
      </Grid>
    </>
  );
}
