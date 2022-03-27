import LinkNext from "next/link";
import { Button, Text, Avatar, Spacer } from "@nextui-org/react";
//utils
import imageService from "services/images";
//types
import { Result } from "services/movies/search/types";

interface Props {
  results: Result[];
}

export default function KeywordResult({ results }: Props) {
  if (results?.length === 0 || !results) {
    return (
      <Button disabled css={{ bg: "$accents1" }}>
        <Text h6 css={{ bg: "transparent" }}>
          0 not results
        </Text>
      </Button>
    );
  }

  return (
    <>
      {results.map(({ id, title, poster_path }) => (
        <LinkNext key={id} href={`/movies/${id}`}>
          <Button
            css={{
              bg: "$accents1",
              justifyContent: "flex-start",
              my: ".5rem",
              "&:hover": { bg: "$gray900" },
            }}
            as="a"
          >
            <Avatar src={imageService.poster.w185(poster_path)} squared />
            <Spacer />
            <Text
              h6
              css={{
                bg: "transparent",
                maxW: "17ch",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Text>
          </Button>
        </LinkNext>
      ))}
    </>
  );
}
