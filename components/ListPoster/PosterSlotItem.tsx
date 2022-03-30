import { Card, Text, CSS } from "@nextui-org/react";
import { Show } from "react-iconly";
//utils
import imageService from "services/images";
//types
import { PosterSlotItemProps } from "./types";
//nextUI css
const cardSelectedCss: CSS = {
  "&::before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
    background: "linear-gradient($gradBlue)",
    mixBlendMode: "multiply",
  },
};

const movieCardCss: CSS = {
  borderRadius: ".5rem",
  "& div": { borderRadius: ".5rem" },
  "&::after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg, transparent, #111)",
  },
};

const cardSelectedIconCss: CSS = {
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
};

const cardSelectedFooterCss: CSS = {
  position: "absolute",
  bottom: 0,
  zIndex: 2,
};

const cardMovieTitle: CSS = {
  textShadow: "0 0 1rem rgba(0,0,0,.5)",
  maxW: "15ch",
  overflow: "hidden",
  whiteSpace: " nowrap",
  textOverflow: "ellipsis",
};

function CardSelectedIcon() {
  return (
    <Card.Header css={cardSelectedIconCss}>
      <Show size="large" />
    </Card.Header>
  );
}

export default function PosterSlotItem({
  movie,
  isSelected,
}: PosterSlotItemProps) {
  return (
    <>
      <Card
        as="li"
        cover
        hoverable
        clickable
        css={{
          ...movieCardCss,
          ...(isSelected && cardSelectedCss),
        }}
      >
        {isSelected && CardSelectedIcon()}
        <Card.Image
          src={imageService.poster.w185(movie.poster_path)}
          color="gradient"
          objectFit="cover"
          width="100%"
          height="10rem"
          css={{ ...(isSelected && { filter: "blur(.5rem)" }) }}
        />
        <Card.Footer css={cardSelectedFooterCss}>
          <Text h6 css={cardMovieTitle}>
            {movie.title}
          </Text>
        </Card.Footer>
      </Card>
    </>
  );
}
