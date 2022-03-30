import { Grid, Row, Card, Button, CSS } from "@nextui-org/react";
import { Heart2, Plus, Play } from "react-iconly";

//utils
import imageService from "services/images";
//types
import { MovieOptionsProps } from "./types";
//nextUI css
const optionButtonCss: CSS = { minWidth: "90% !important" };
const rowCss: CSS = { flexDirection: "column", gap: "1rem", maxW: "320px" };

export default function MovieOptions({ poster }: MovieOptionsProps) {
  return (
    <>
      <Grid xs={12} sm={2} md={2} justify="center">
        <Row align="center" css={rowCss}>
          <Card.Image
            src={imageService.poster.w185(poster)}
            width="100%"
            height="180px"
          />
          <Button flat icon={<Plus />} css={optionButtonCss}>
            Add to list
          </Button>
          <Button
            flat
            color="secondary"
            icon={<Heart2 />}
            css={optionButtonCss}
          >
            Watch later
          </Button>
          <Button flat color="success" icon={<Play />} css={optionButtonCss}>
            Trailer
          </Button>
        </Row>
      </Grid>
    </>
  );
}
