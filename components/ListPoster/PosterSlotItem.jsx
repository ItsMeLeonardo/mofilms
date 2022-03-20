import { Card, Text } from "@nextui-org/react";
import { Show } from "react-iconly";

import { imageUrl } from "../../services/images";

const cardSelectedCss = {
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

const movieCardCss = {
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

function CardSelectedIcon() {
  return (
    <Card.Header
      css={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <Show size="large" />
    </Card.Header>
  );
}

export default function PosterSlotItem({ movie, isSelected }) {
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
          src={imageUrl.poster_sizes.w185(movie.poster_path)}
          color="gradient"
          objectFit="cover"
          width="100%"
          height="10rem"
          css={{ ...(isSelected && { filter: "blur(.5rem)" }) }}
        />
        <Card.Footer css={{ position: "absolute", bottom: 0, zIndex: 2 }}>
          <Text
            h6
            css={{
              textShadow: "0 0 1rem rgba(0,0,0,.5)",
              maxW: "15ch",
              overflow: "hidden",
              whiteSpace: " nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {movie.title}
          </Text>
        </Card.Footer>
      </Card>
    </>
  );
}
