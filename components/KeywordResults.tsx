import LinkNext from "next/link";
import { Button, Text, Avatar, Spacer, Loading, CSS } from "@nextui-org/react";
//utils
import imageService from "services/images";
import { useMovieSearch } from "hooks/useMovieSearch";

interface Props {
  keyword: string;
}

//nextui css
const resultButtonCss: CSS = {
  bg: "$accents1",
  justifyContent: "flex-start",
  my: ".5rem",
  "&:hover": { bg: "$gray900" },
};

const resultTextCss: CSS = {
  bg: "transparent",
  maxW: "17ch",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

function FallbackMessage({ message }: { message: string }) {
  return (
    <Button disabled css={{ bg: "$accents1" }}>
      <Text h6 css={{ bg: "transparent" }}>
        {message}
      </Text>
    </Button>
  );
}

function FallbackLoading() {
  return (
    <Button disabled css={{ bg: "$accents1" }}>
      <Loading type="points-opacity" color="white" size="sm" />
    </Button>
  );
}

export default function KeywordResult({ keyword }: Props) {
  const { isLoading, data, error } = useMovieSearch({ keyword });

  if (isLoading) return <FallbackLoading />;
  if (error) return <FallbackMessage message={error.message} />;

  const { results } = data;
  if (results?.length === 0 || !results) {
    return <FallbackMessage message={`No results for ${keyword}`} />;
  }

  return (
    <>
      {results.map(({ id, title, poster_path }) => (
        <LinkNext key={id} href={`/movies/${id}`}>
          <Button css={resultButtonCss} as="a">
            <Avatar src={imageService.poster.w92(poster_path)} squared />
            <Spacer />
            <Text h6 css={resultTextCss}>
              {title}
            </Text>
          </Button>
        </LinkNext>
      ))}
    </>
  );
}
