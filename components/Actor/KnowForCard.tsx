import { useRouter } from "next/router";
import { Grid, Card, CSS } from "@nextui-org/react";

//utils
import ImageService from "services/images";

//types
import { KnownFor, MediaType } from "services/actors/types/knowFor";

interface Props {
  knownFor: KnownFor;
  index: number;
}

//nextui css
const cardImageCss: CSS = {
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

const cardTvCss: CSS = {
  cursor: "not-allowed",
};

//TODO: change this default image
const defaultImage =
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80";

export default function KnownForCard({ knownFor, index }: Props) {
  const router = useRouter();

  const { id, backdrop_path, title, media_type } = knownFor;
  const isMovie = media_type === MediaType.Movie;

  const goToMovie = () => {
    if (isMovie) {
      router.push(`/movies/${id}`);
    } else {
      // router.push(`/tv/${id}`);
    }
  };

  const onImageError = (event) => {
    event.currentTarget.src = defaultImage;
  };

  return (
    <Grid key={id} xs={index == 0 ? 12 : 6}>
      <Card.Image
        onError={onImageError}
        showSkeleton
        css={isMovie ? cardImageCss : cardTvCss}
        onClick={goToMovie}
        width="100%"
        height={80}
        objectFit="cover"
        src={ImageService.backdrop.w300(backdrop_path)}
        alt={title}
      />
    </Grid>
  );
}
