import { Card, CardProps, ImageProps } from "@nextui-org/react";

//utils
import { useResponsiveImage } from "hooks/useResponsiveImage";

//types
import { MediaType } from "services/images/types";

type Props = {
  mediaType: MediaType;
};

type CardImageProps = Props & CardProps & ImageProps;

export default function CardImage(props: CardImageProps) {
  //FIXME: here possible static value
  const { mediaType, src, ...rest } = props;
  const { imageUrl } = useResponsiveImage(src, mediaType);
  console.log({ imageUrl });
  return <Card.Image {...rest} src={imageUrl} />;
}
